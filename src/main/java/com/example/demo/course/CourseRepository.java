package com.example.demo.course;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CourseRepository extends CrudRepository<Course, Long> {



    public List<Course> getCourseByName(String name);

    public List<Course> findByTopicId(Long topicId);

    public List<Course> getCourseByTopic(Long topicId);
}
