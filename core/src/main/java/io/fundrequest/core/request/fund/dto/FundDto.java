package io.fundrequest.core.request.fund.dto;

import java.time.LocalDateTime;

public class FundDto {

    private String funder;
    private Long amountInWei;
    private Long requestId;
    private LocalDateTime creationDate;

    public String getFunder() {
        return funder;
    }

    public void setFunder(String funder) {
        this.funder = funder;
    }

    public Long getAmountInWei() {
        return amountInWei;
    }

    public void setAmountInWei(Long amountInWei) {
        this.amountInWei = amountInWei;
    }

    public Long getRequestId() {
        return requestId;
    }

    public void setRequestId(Long requestId) {
        this.requestId = requestId;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }
}