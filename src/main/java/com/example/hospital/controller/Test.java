package com.example.hospital.controller;

import com.example.hospital.dto.PatientDTO;
import com.example.hospital.dto.TestDTO;
import com.example.hospital.entity.Patient;
import com.example.hospital.service.TestService;
import com.example.hospital.utill.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/test")
@CrossOrigin
public class Test {

 @Autowired
 private TestService testService;

    @PostMapping(value = "/test")
    public ResponseEntity<StandardResponse> addTest(@RequestBody TestDTO testDTO){
        String message=testService.addTest(testDTO);
        ResponseEntity<StandardResponse> response=new ResponseEntity<StandardResponse>
                (new StandardResponse(200,"success",message), HttpStatus.CREATED);
        return response;
    }

    @GetMapping(value = "get-all-tests")
    public ResponseEntity<StandardResponse> getAllTests() {
        List<com.example.hospital.entity.Test> allTests = testService.getAllTests();
        StandardResponse response = new StandardResponse(200, "success", allTests);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping(value = "delete-test-by-id",
            params = "id")
    public ResponseEntity<StandardResponse> deleteTestById(@RequestParam(value = "id")int testId){
        String deleteTestById=testService.deleteTestById(testId);
        ResponseEntity<StandardResponse> response=new ResponseEntity<StandardResponse>
                (new StandardResponse(203,"success",deleteTestById), HttpStatus.OK);
        return response;
    }

    @GetMapping(value = "/get-test-by-id",
    params = "id")
    public ResponseEntity<StandardResponse> getTestById(@RequestParam("id") int testId) {
        Optional<com.example.hospital.entity.Test> test = testService.getTestById(testId);
        if (test != null) {
            StandardResponse response = new StandardResponse(200, "success", test);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            StandardResponse response = new StandardResponse(404, "Test not found", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

}
