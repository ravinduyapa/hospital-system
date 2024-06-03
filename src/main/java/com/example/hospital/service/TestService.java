package com.example.hospital.service;

import com.example.hospital.dto.TestDTO;
import com.example.hospital.entity.Test;
import com.example.hospital.exception.NotFoundException;
import com.example.hospital.repository.TestRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private ModelMapper modelMapper;

    public String addTest(TestDTO testDTO) {
        testRepository.save(modelMapper.map(testDTO, Test.class));
        return  " Save Successfully";
    }

    public List<Test> getAllTests() {
        return testRepository.findAll();
    }

    public String deleteTestById(int testId) {
        if (testRepository.existsById(testId)) {
            testRepository.deleteById(testId);
            return  " Delete Successfully";

        } else {
            throw new NotFoundException("No Test Found");
        }
    }


    public Optional<Test> getTestById(int testId) {
        return testRepository.findById(testId);
    }
}
