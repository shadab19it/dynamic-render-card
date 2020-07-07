import React, { FC, useState } from "react";
import "./SelectBox.scss";
import { Input, Select } from "antd";
import { CodeSandboxOutlined, CloseOutlined } from "@ant-design/icons";
const { Option } = Select;

const CustomCard: FC<{ title: string; desc: string; field: any; icon: any }> = ({ title, desc, field, icon }) => {
  return (
    <div className='card-wrapper'>
      <div>
        <div className='icon-box'>{icon}</div>
        <div className='content'>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
      {field}
    </div>
  );
};

const Cards: JSX.Element[] = [
  <CustomCard
    title='one'
    desc='this is the first card'
    field={<Input placeholder='Basic usage' style={{ height: "40px" }} />}
    icon={<CodeSandboxOutlined />}
  />,
  <CustomCard
    title='two'
    desc='this is the first card'
    field={<Input placeholder='Basic usage' style={{ height: "40px" }} />}
    icon={<CodeSandboxOutlined />}
  />,

  <CustomCard
    title='Three'
    desc='this is the first card'
    field={<Input placeholder='Basic usage' style={{ height: "40px" }} />}
    icon={<CodeSandboxOutlined />}
  />,

  <CustomCard
    title='Four'
    desc='this is the first card'
    field={<Input placeholder='Basic usage' style={{ height: "40px" }} />}
    icon={<CodeSandboxOutlined />}
  />,
];

const SelectBox = () => {
  const [box, setBox] = useState<number[]>([]);

  const onChange = (value: number) => {
    const boxes = [...box, value];
    setBox(Array.from(new Set(boxes)));
  };

  const deleteBox = (id: number) => {
    const boxes = [...box];
    boxes.splice(id, 1);
    setBox(boxes);
  };

  return (
    <div className='main-wrapper'>
      <div className='card-container'>
        {box.map((b, i) => {
          return (
            <div key={i} className='box'>
              <span className='close' onClick={() => deleteBox(i)}>
                <CloseOutlined />
              </span>
              {Cards[b]}
            </div>
          );
        })}
      </div>
      <div className='options'>
        <Select
          showSearch
          style={{ width: "100%", height: "100%" }}
          placeholder='Select a person'
          optionFilterProp='children'
          onChange={onChange}
          filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
          <Option value={0}>One</Option>
          <Option value={1}>Two</Option>
          <Option value={2}>Three</Option>
          <Option value={3}>four</Option>
        </Select>
      </div>
    </div>
  );
};

export default SelectBox;
