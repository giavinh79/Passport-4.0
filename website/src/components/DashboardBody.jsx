import React from 'react'
import ActivityOverview from './ActivityOverview';
import WelcomeBar from './WelcomeBar';
import Messages from './ActivityOverview';
import PieChart from 'react-minimal-pie-chart';
import Warning from '@material-ui/icons/Warning';
import { Col, Row, Card, CardBody, CardTitle, CardHeader, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem } from 'reactstrap';
import { borderRadius } from '@material-ui/system';

export default function DashboardBody() {
    return(
        <div style={{width:'100%'}}>
            <WelcomeBar name='Landon Durette'/>
            <div style={styles.parentContainer}>
                <div style={styles.topContainer}>
                    <Row>
                        <Col lg={4}>
                            <h4 style={{marginBottom: '35px'}}>Recent Activity</h4>
                            <Breadcrumb>
                                <BreadcrumbItem active>Deposit List</BreadcrumbItem>
                            </Breadcrumb>
                            <Breadcrumb>
                                <BreadcrumbItem active>Define Remittance Coupon - Weber Market</BreadcrumbItem>
                            </Breadcrumb>
                            <Breadcrumb>
                                <BreadcrumbItem active>Audit Log</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                        <Col lg={4}>
                            <h4 style={{marginBottom: '35px'}}>Alerts</h4>
                            <Card>
                                <CardHeader><Warning /></CardHeader>
                                <CardBody style={{padding: '0'}}>
                                    <ListGroup style={{color:'#f26518'}}>
                                        <ListGroupItem>Deposit 059 is Open-Incomplete</ListGroupItem>
                                        <ListGroupItem>Deposit 002 is Open-Jammed</ListGroupItem>
                                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        
                        </Col>
                        <Col lg={4}>
                            <h4 style={{marginBottom: '35px'}}>Messages</h4>
                            <Card>
                                <CardBody style={{padding: '25px 10px 25px 10px'}}>
                                    <ul>
                                        <li style={{marginBottom:'20px'}}>Cloud Scanning is Disabled, click <a href='#'>here</a> to Enable it</li>
                                        <li>You Have Conflicting Settings, click <a href='#'>here</a> to View and Reconfigure Settings</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div style={{margin:'10px 0 10px 0', width:'100%', border:'1pt solid grey'}}></div>
                <div style={styles.bottomContainer}>
                    <Row>
                        <Col lg={4}>
                            <Card style={styles.cardStyle}>
                                <CardTitle><h4>User Information</h4></CardTitle>
                                <CardBody>
                                    <strong><ul style={{padding:'0'}}>
                                        <li>Bank Administrator</li>
                                        <li>Customer Operator</li>
                                        <li>Customer Supervisor</li>
                                    </ul></strong>
                                    <p style={{margin:'30px 0 0 -15px'}}>Last Login: 07/30/2019 04:33PM</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={8}>
                            <Card style={styles.cardStyle}>
                                <CardTitle><h4>Statistics</h4></CardTitle>
                                <Row>
                                    <Col sm={3}>
                                        <div style={{height: '100%', paddingTop: '50px'}}>
                                            <p>Percentage of Open-Balanced Deposits Approved</p>
                                        </div>
                                    </Col>
                                    <Col className="text-center" sm={3}>
                                        <Row><div style={{width: '100%', alignItems: 'center'}}><h4>80%</h4></div></Row>
                                        <Row>
                                            <PieChart
                                                data={[
                                                    { title: '80%', value: 80, color: '#E38627' },
                                                    { title: 'Two', value: 20, color: 'white' }
                                                ]}
                                                animate={true}
                                                animationDuration={'1000'}
                                                
                                            />
                                        </Row>
                                    </Col>
                                    <Col sm={6}>
                                        Your Roles:
                                        <ul>
                                            <li>Bank Administrator</li>
                                            <li>Customer Operator</li>
                                            <li>Customer Supervisor</li>
                                        </ul>
                                        Last Login: 07/30/2019 04:33PM EDT
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

const styles = {
    parentContainer : {
        display: 'flex',
        flexDirection: 'column'
    },
    topContainer : {
        display: 'flex',
        padding: '1rem',
        flex: '3',
        flexDirection: 'row'
    },
    bottomContainer : {
        display: 'flex',
        padding: '1rem',
        flex: '1',
        flexDirection: 'row'
    },
    cardStyle : {
        align: 'center',
        padding: '20px 20px 20px 20px',
        height: '100%'
    }
}