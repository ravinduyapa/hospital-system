package com.example.hospital.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TestDTO {
    private String doctorName;
    private String testName;
    private Integer testPrice;
}
