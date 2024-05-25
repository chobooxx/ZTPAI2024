package jablonski.jakub.BookYou.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoResponse {
    private boolean isRead;
    private boolean isToRead;
    private boolean isLiked;
}
