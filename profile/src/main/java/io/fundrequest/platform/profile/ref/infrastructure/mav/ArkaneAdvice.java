package io.fundrequest.platform.profile.ref.infrastructure.mav;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.fundrequest.platform.profile.profile.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.representations.JsonWebToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
@Slf4j
public class ArkaneAdvice extends HandlerInterceptorAdapter {

    private ProfileService profileService;
    private static final Set<String> IGNORED_URLS = Stream.of(
            "/profile/link/arkane",
            "/profile/link/safeid",
            "/profile/link/safeid-test",
            "/profile/link/safeid",
            "/profile/link/arkane/redirect",
            "/profile/link/safeid/redirect",
            "/profile/link/safeid-test/redirect",
            "/logout",
            "/login"
                                                             ).collect(Collectors.toSet());

    public ArkaneAdvice(ProfileService profileService) {
        this.profileService = profileService;
    }

    // to be used checking session management for user.
    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) throws Exception {

        if (!isIgnoredUrl(request) && !isAjaxRequest(request)) {

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication.getClass().isAssignableFrom(KeycloakAuthenticationToken.class) && profileService.getUserProfile(authentication).getArkane() != null) {
                String accessToken = profileService.getArkaneAccessToken((KeycloakAuthenticationToken) authentication);
                log.info("Redirecting from {}", request.getRequestURL());
                if (accessTokenIsExpired(accessToken)) {
                    if (!response.isCommitted()) {
                        log.info("Redirecting from {}", request.getRequestURL());
                        String url = request.getRequestURL().toString();
                        response.sendRedirect("/profile/link/arkane?redirectUrl=" + url);
                        return false;
                    }
                }
            }
        }
        return true;
    }

    private boolean isIgnoredUrl(HttpServletRequest request) {
        return IGNORED_URLS.stream().anyMatch(i -> request.getRequestURL().toString().toLowerCase().contains(i));
    }

    private boolean isAjaxRequest(HttpServletRequest request) {
        return request.getHeader("x-requested-with") != null
               && request.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest");
    }

    public static boolean accessTokenIsExpired(String jwtToken) {
        if (StringUtils.isBlank(jwtToken)) {
            return false;
        }
        String[] split_string = jwtToken.split("\\.");
        String base64EncodedBody = split_string[1];
        Base64 base64Url = new Base64(true);
        String body = new String(base64Url.decode(base64EncodedBody));
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValue(body, JsonWebToken.class).isExpired();
        } catch (IOException e) {
            return false;
        }
    }
}
