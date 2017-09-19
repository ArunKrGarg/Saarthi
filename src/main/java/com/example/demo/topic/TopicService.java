package com.example.demo.topic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    private List<Topic> topics = new ArrayList<>(Arrays.asList(
            new Topic((long) 1, "Spring Framework", "Spring Framework Description"),
            new Topic((long) 2, "Spring Framework", "Spring Framework Description"),
            new Topic((long) 3, "Spring Framework", "Spring Framework Description")
    ));

    public List<Topic> getAllTopics() {
        List<Topic> topics = new ArrayList<>();
        topicRepository.findAll().forEach(topics::add);
        return topics;
    }

    public Topic getTopic(Long id) {
        return topicRepository.findOne(id);
    }

    public void addTopic(Topic topic) {
        topicRepository.save(topic);
    }

    public void updateTopic(Long id,Topic topic) {
       topicRepository.save(topic);
    }

    public void deleteTopic(Long id) {
        topicRepository.delete(id);
    }
}
