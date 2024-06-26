package com.FashionStore.repositories;

import com.FashionStore.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findUsersByEmail(String email);
    List<Users> findUsersByEmailContaining(String email);
    List<Users> findUsersByPhoneNumber(String phoneNumber);

    Users findUsersByUserID(Long userID);
}
