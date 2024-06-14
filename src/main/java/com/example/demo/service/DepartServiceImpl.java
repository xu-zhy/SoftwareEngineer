package com.example.demo.service;

import com.example.demo.bean.Depart;
import com.example.demo.mapper.DepartMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("departService")
public class DepartServiceImpl implements DepartService{
    @Autowired
    private DepartMapper departMapper;

    @Override
    public List<Depart> selectAll() {
        return departMapper.selectAll();
    }
}