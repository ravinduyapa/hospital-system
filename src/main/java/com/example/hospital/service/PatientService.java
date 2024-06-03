package com.example.hospital.service;

import com.example.hospital.dto.PatientDTO;
import com.example.hospital.entity.Patient;
import com.example.hospital.exception.NotFoundException;
import com.example.hospital.repository.PatientRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private ModelMapper modelMapper;

    public String addPatient(PatientDTO patientDTO) {
            patientRepository.save(modelMapper.map(patientDTO, Patient.class));
            return patientDTO.getName() + " Save Successfully";
    }


    public String deleteAppointmentById(int appointmentId) {
        if (patientRepository.existsById(appointmentId)) {
            patientRepository.deleteById(appointmentId);
            return appointmentId + " Delete Successfully";

        } else {
            throw new NotFoundException("No Appointment Found");
        }
    }


    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Optional<Patient> getPatientById(int id) {
        return patientRepository.findById(id);
    }
}
