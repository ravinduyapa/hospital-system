package com.example.hospital.repository;

import com.example.hospital.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface TestRepository extends JpaRepository<Test,Integer> {
    Optional<Test> findByTestName(String testName);
}
