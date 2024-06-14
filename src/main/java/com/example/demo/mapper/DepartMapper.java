package com.example.demo.mapper;

import com.example.demo.bean.Depart;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface DepartMapper {
    @Select({
            "select",
            "id, depName, grades",
            "from departments"
    })
    List<Depart> selectAll();
}