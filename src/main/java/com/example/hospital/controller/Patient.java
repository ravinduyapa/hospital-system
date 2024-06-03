package com.example.hospital.controller;

import com.example.hospital.dto.PatientDTO;
import com.example.hospital.service.PatientService;
import com.example.hospital.utill.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/patient")
public class Patient {

    @Autowired
    private PatientService patientService;


    @PostMapping(value = "/add")
    public ResponseEntity<StandardResponse> addPatient(@RequestBody PatientDTO patientDTO){
        String message=patientService.addPatient(patientDTO);
        ResponseEntity<StandardResponse> response=new ResponseEntity<StandardResponse>
                (new StandardResponse(200,"success",message), HttpStatus.CREATED);
        return response;
    }

    @GetMapping(value = "get-all-appointment")
    public ResponseEntity<StandardResponse> getAllAppointment() {
        List<com.example.hospital.entity.Patient> allPatients = patientService.getAllPatients();
        StandardResponse response = new StandardResponse(200, "success", allPatients);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @GetMapping(value = "get-appointment-by-id")
    public ResponseEntity<StandardResponse> getAppointmentById(@RequestParam(value = "id") int id) {
        Optional<com.example.hospital.entity.Patient> patientOptional = patientService.getPatientById(id);
        if (patientOptional.isPresent()) {
            com.example.hospital.entity.Patient patient = patientOptional.get();
            StandardResponse response = new StandardResponse(200, "success", patient);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            StandardResponse response = new StandardResponse(404, "Patient not found", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping(value = "delete-appointment-by-id",
            params = "id")
    public ResponseEntity<StandardResponse> deleteAppointmentById(@RequestParam(value = "id")int appointmentId){
        String deleteAppointmentById=patientService.deleteAppointmentById(appointmentId);
        ResponseEntity<StandardResponse> response=new ResponseEntity<StandardResponse>
                (new StandardResponse(203,"success",deleteAppointmentById), HttpStatus.OK);
        return response;
    }



}

