import { Button, Col, Flex, Form, Grid, Input, Row } from "antd";
import colors from "../../utils/colors";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LogoH } from "../atoms/LogoH.";
import { useSupabase } from "../../hooks/useSupabase";
import { useState } from "react";
import { Link } from "react-router-dom";
const { useBreakpoint } = Grid;

const loginCardStyle = { backgroundColor: '#FFF', borderRadius: '8px', minHeight: '450px'  }
const loginFormTitleStyle = { textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold', color: colors.secondary}
const flexCentered = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }

export const Login = () => {
  const supabase = useSupabase()
  const { sm, md, lg } = useBreakpoint();
  
  const [ loginError, setLoginError ] = useState(false)

  const onFinish = async (values) => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: values.username,
      password: values.password,
    })

    if(error.__isAuthError) { loginErrorHandle() }
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  };
  
const loginErrorHandle = () => {
  setLoginError('Usuário ou senha inválidos')
  setTimeout(() => setLoginError(false), 3500)
}
  return (
    <Flex 
      justify="center" 
      align="center"  
      style={{ 
        background: `linear-gradient(to bottom right, #e7f0fe, ${colors.primaryLight} 60%, ${colors.secondary})`,
        height: '100vh',
        padding: !sm ? '0 15px' : '0 30px' 
      }}
    >
        <Row style={{ ...loginCardStyle, minWidth: lg ? '900px' : '0',}}>
          <Col 
            xs={24} 
            md={24}
            lg={12} 
            style={{ ...flexCentered, padding: !sm ? '15px' : '20px' }}
          >
                <LogoH width={230}/>
                
                <h3 style={{ color: '#8898aa', fontWeight: '500', marginTop: !md ? '1rem' : '2rem' }}>
                  Boas-Vindas ao <span style={{ color: colors.primary, textTransform: 'uppercase', marginLeft: 3 }}>Projeto Raízes</span>
                </h3>
          </Col>

          <Col 
            xs={24} 
            md={24}
            lg={12} 
            style={{ ...flexCentered, backgroundColor: '#e7ecfe', padding: !sm ? '15px' : '20px', borderRadius: lg ? '0 8px 8px 0' : '10px',  }}
          >
                <Form
                  name="basic"
                  labelCol={{ span: 8}}
                  wrapperCol={{ span: 24 }}
                  style={{ maxWidth: 600, width: !md ? '100%' : '75%' }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <h2 style={{ ...loginFormTitleStyle, marginTop: !lg ? '-20px' : '-30px' }} >Log In</h2>
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
                      style={{ borderColor: loginError ? '#ff4d4f' : '' }}
                      prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}} /> }
                      />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Não pode ser vazio!',
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Digite sua senha"
                      size="large"
                      style={{ borderColor: loginError ? '#ff4d4f' : '' }}
                      prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>} 
                    />
                  </Form.Item>
                    <h4 style={{ fontWeight: '500', color: '#ff4d4f', opacity: loginError ? 1 : 0, marginBottom: '-20px'}}>{loginError || 'eee'}</h4>


                  <Form.Item label={null} style={{ marginBottom: !md ? '0' : '' }}>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', marginTop: '1.5rem' }}>
                      <span style={{ fontWeight: '600' }}>Entrar</span>
                    </Button>
                    
                    <h4 style={{  fontWeight: '500', marginTop: '8px', textAlign: 'center'}}><Link to={'/matricula'} style={{ textDecoration: 'underline' }}>Ainda não tenho uma conta</Link></h4>
                  </Form.Item>
                </Form>
          </Col>

        </Row>
    </Flex> 
  )
}
