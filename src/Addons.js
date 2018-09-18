    /*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,Checkbox,Visible,lg,xs} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import styling from './AppStyles';
import SweetAlert from 'react-swal';
import swal from 'sweetalert';
import debounce from 'lodash.debounce';


/*const {
    Welcome
} = TodoStyles;*/
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }),
    SCROLL: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width:5000,
        height: 72,
        paddingVertical:20,
        marginLeft:-1200,
        marginTop:12
    }),

};



var token
var idv
var resJson
var quoteid
var premium
var odpremium
var responseJson1

var enquiryId
var totalGrossPremium
var TotalPremium
var resJson1
export default class InsuranceAddons extends RX.Component{

    // onPress(event) {
    //     this.onChangePostt();
    //     this.onChangePostt1();
    //  }
    constructor(props) {
        super(props);
        // this.onChangePostt = this.onChangePostt.bind(this);
        // this.onChangePostt1 = this.onChangePostt1.bind(this);

        this._translationValue = RX.Animated.createValue(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }

onChangePostt = () => {
        console.log("hitting.......")
   // this.props.onNavigateNinety(resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium,TotalPremium,resJson2); 
         this.props.onNavigateNinety(token)                 
}
                       
  
    onChangePost  () {
        console.log(token,"tokenab")
        this.props.onPressSuper(token,res1);
        
    }
    // componentDidMount() {
    //     let animation = RX.Animated.timing(this._translationValue, {
    //             toValue: 0,
    //             easing: RX.Animated.Easing.OutBack(),
    //             duration: 500
    //         }
    //     );

    //     animation.start();
    // }
    // componentWillUnmount() {
    //     this.emitChangeDebounced.cancel();
       

    //   }

    render() {
       
        resJson1 = this.props.navigatorRoute.resJson1
        liability = this.props.navigatorRoute.liability
        message = this.props.navigatorRoute.message
        quoteid =  this.props.navigatorRoute.quoteid
        premium = this.props.navigatorRoute.premium
        odpremium = this.props.navigatorRoute.odpremium
        token = this.props.navigatorRoute.token

        enquiryId = this.props.navigatorRoute.enquiryId
        responseJson1 = this.props.navigatorRoute.responseJson1
        idv = this.props.navigatorRoute.idv
        totalGrossPremium = this.props.navigatorRoute.totalGrossPremium
        TotalPremium = this.props.navigatorRoute.TotalPremium
        resJson2 = this.props.navigatorRoute,resJson2
        console.log(token,"token")
        console.log(quoteid,"addonspagequoteid")
        console.log(enquiryId,"addons enquiryId")
        console.log(premium,"kkkkkkk")
        console.log(resJson2,"kaviiiiiii")
        return (
              <RX.ScrollView style={ _styles.scroll }>
            <RX.View style={ styling.container }>
            <RX.Button  onPress={()=> this.onChangePost()}><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={styling.welcome }>New Bike Insurance </RX.Text>
                   </RX.Button>
                {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
                    <RX.Text style={ styling.buttonText }>
                        Go Back
                    </RX.Text>
                </RX.Button>*/}
            </RX.View>
                <RX.View style={ styling.flute }>
                    <RX.Text style={ styling.head }>
                        Addons and Accessories
                    </RX.Text>
                </RX.View>
                <Grid>
                    <Row className="show-grid" style={styling.contain}>
                        <Col md={10} mdOffset={2} className="hidden-xs" >
                            <code style={styling.assitance}><Checkbox>24X7 Road Side Assistance</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Zero Depreciation</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Engine Protection Cover</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>NCB Protector</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Key and Lock Replacements</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Consumables</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>External Accessories-Electrical</Checkbox></code>
                        </Col>
                        <Col xs={10}  xsOffset={2}  className="hidden-lg">
                            <code style={styling.assitanceMob}><Checkbox>24X7 Road Side Assistance</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Zero Depreciation</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Engine Protection Cover</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>NCB Protector</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Key and Lock Replacements</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Consumables</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>External Accessories-Electrical</Checkbox></code>
                        </Col>

                    {/*<Col xs={10} md={10}><code></code></Col>*/}
                    </Row>
                </Grid>
                <RX.View style={ styling.flute }>
                    <RX.Text style={ styling.head }>
                        Additional Covers
                    </RX.Text>
                </RX.View>
                <Grid>
                    <Row className="show-grid" style={styling.contain}>
                        <Col md={10} mdOffset={2} className="hidden-xs" >
                            <code style={styling.assitance}><Checkbox>24X7 Road Side Assistance</Checkbox></code>
                            <code style={styling.assitance}><Checkbox>Zero Depreciation</Checkbox></code>
                        </Col>
                        <Col xs={10}  xsOffset={2}  className="hidden-lg">
                            <code style={styling.assitanceMob}><Checkbox>24X7 Road Side Assistance</Checkbox></code>
                            <code style={styling.assitanceMob}><Checkbox>Zero Depreciation</Checkbox></code>
                        </Col>

                        {/*<Col xs={10} md={10}><code></code></Col>*/}
                    </Row>
                </Grid>


                {/* <RX.Button style={styling.BUTTON4}  onPress={()=> this.onChangePostt()}>Next</RX.Button> */}

                <RX.Button style={styling.BUTTON4}  onPress={()=> this.onChangePostt()}>Next</RX.Button>







                {/*Bootstrap ex stashed for integrate*/}
                {/*<Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                    <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
                    <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
                    <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
                    <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                        <MenuItem eventKey="4.1">Action</MenuItem>
                        <MenuItem eventKey="4.2">Another action</MenuItem>
                        <MenuItem eventKey="4.3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4.4">Separated link</MenuItem>
                    </NavDropdown>
                </Nav>




                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                        <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                        <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
                    </Row>
                </Grid>


                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>*/}

                <RX.Button style={ Button } onPress={ this.props.onNavigateTen }>
                    <RX.Text style={ styling.buttonText }>
                        Go Back
                    </RX.Text>
                </RX.Button>
            </RX.ScrollView>

        );
    }
}