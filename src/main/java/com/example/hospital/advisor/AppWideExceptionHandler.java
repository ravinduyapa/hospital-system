package com.example.hospital.advisor;


import com.example.hospital.exception.DuplicateException;
import com.example.hospital.exception.NotFoundException;
import com.example.hospital.utill.StandardResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppWideExceptionHandler {
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<StandardResponse> handleNotFoundException(NotFoundException e){
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(400,"Not Found Error",e.getMessage()), HttpStatus.NOT_FOUND
        );

    }

    @ExceptionHandler(DuplicateException.class)
    public ResponseEntity<StandardResponse> handleDuplicateException(DuplicateException e){
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(400,"Not Found Error",e.getMessage()), HttpStatus.ALREADY_REPORTED
        );

    }
}
