import { Button, Card, Checkbox, Flex, Form, Input } from "antd";
import { Logo } from "../atoms/Logo";
import colors from "../../utils/colors";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LogoH } from "../atoms/LogoH.";

const loginCardStyle = { backgroundColor: '#FFF', borderRadius: '8px', minWidth: '900px', height: '450px'  }
const loginFormTitleStyle = { textAlign: 'center', marginTop: '-30px', marginBottom: '2rem', fontWeight: 'bold', color: colors.secondary}

export const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  };
  
  return (
    <Flex 
      justify="center" 
      align="center"  
      
      style={{ height: '100vh',  background: `linear-gradient(to bottom right, #e7f0fe, ${colors.primaryLight} 60%, ${colors.secondary})`,}}
    >
        <Flex  justify="center" style={loginCardStyle}>
          <Flex vertical justify="center" align="center" style={{ padding: '30px', width: '100%'}}>
              <LogoH width={230}/>
              
              <h3 style={{ color: '#8898aa', fontWeight: '500', marginTop: '2rem' }}>
              Boas-Vindas ao <span style={{ color: colors.primary, textTransform: 'uppercase', marginLeft: 3 }}>Projeto Raízes</span>

              </h3>
          </Flex>

          <Flex vertical justify="center" align="center" style={{ backgroundColor: '#e7ecfe', padding: '30px', borderRadius: '0 8px 8px 0', width: '100%'}}>
              <Form
                name="basic"
                labelCol={{ span: 8}}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <h2 style={loginFormTitleStyle}>Log In</h2>
                <Form.Item
                  name="username"
                  rules={[{
                      required: true,
                      message: 'Não pode ser vazio!',
                    }]}
                >
                  <Input
                    placeholder="Usuário"
                    size="large"
                    prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}} /> }
                    />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{
                      required: true,
                      message: 'Não pode ser vazio!',
                    }]}
                >
                  <Input.Password
                    placeholder="Digite sua senha"
                    size="large"
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>} 
                  />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </Form>
          </Flex>
        </Flex>
    </Flex> 
  )
}
