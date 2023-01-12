import 'antd/dist/reset.css';
import { Layout, Form, InputNumber, Button } from 'antd';
import { useState } from 'react';
import React from 'react';

const { Header, Content, Footer } = Layout;

function Home() {

  const [ price, setPrice ] = useState(0);

  function triggerCalcPrice(input) {
    setPrice(
      ((input.width/1000 * input.height/1000 * input.cost) + (input.surcharge || 0)).toFixed(2)
    )
  }

  return (
    <Layout>
      <Header>
        <h1 style={{ color:"white" }}>Glass Pricer</h1>
      </Header>
      <Content>
        <Form
          name="pricer"
          wrapperCol={{ span: 6 }}
          onFinish={triggerCalcPrice}
          style={{ padding: "25px 50px" }}
        >
          <Form.Item
            label="Cost/m2"
            name="cost"
            rules={[{ required: true, message: "Price required" }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            label="Height (mm)"
            name="height"
            rules={[{ required: true, message: "Height required" }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            label="Width (mm)"
            name="width"
            rules={[{ required: true, message: "Width required" }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            label="Surcharge"
            name="surcharge"
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Calculate
            </Button>
          </Form.Item>
        </Form>
        <div style={{ padding: "0 50px" }}>
          {price>0 ? <p>The price is £{price}</p>: "Price is £0, check the inputs."}
        </div>
      </Content>
    </Layout>
  )
}

export default Home;