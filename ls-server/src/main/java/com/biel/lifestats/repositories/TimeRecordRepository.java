package com.biel.lifestats.repositories;

import com.biel.lifestats.model.TimeRecord;
import jdk.Exported;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = true)
public interface TimeRecordRepository extends CrudRepository<TimeRecord, Long> {
}
