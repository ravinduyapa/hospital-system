package com.example.hospital.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PatientDTO {
    private String name;
    private Integer age;
    private String nic;
    private String address;
    private Integer mobileNumber;
    private String doctorName;
    private String testName;
    private Date date;
}
