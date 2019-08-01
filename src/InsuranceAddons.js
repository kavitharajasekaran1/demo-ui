/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,label,Form,FormGroup,ControlLabel,FormControl,Checkbox,Visible,lg,xs} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import styling from './AppStyles';
import SweetAlert from 'react-swal';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import swal from 'sweetalert';
import debounce from 'lodash.debounce';
const parseJson = require('parse-json');
//const parser = require('xml2json');
//var uniqid = require('uniqid');
//var excelToJson = require('convert-excel-to-json');
import { DropdownMenu, MenuItem as DMenuItem } from 'react-bootstrap-dropdown-menu';

//import xlsx from 'xlsx'; 
 //import { Dropdown } from 'react-native-material-dropdown';
//  const options = Array.from(res1);
// import Select from "react-virtualized-select";
//const options = res1;
//   import faker from "faker";






// var workbook = xlsx.readFile('./src/img/royalmaster.xlsx');









const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }),
    SCROLL: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#2222c357'
    }),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width:3000,
        height: 65,
        paddingVertical:20,
        marginLeft:-1200,
        marginTop:30,
        paddingTop:30,
    }),
   

};


var token
var idv
var resJson
var quoteid
var premium
var odpremium
 var responseJson1
// var responseJson2
var TotalPremium
var rows


var enquiryId
var totalGrossPremium
 var res1
 var resJson2
 var resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium,TotalPremium,resJson2

export default class InsuranceAddons extends RX.Component{
    
    
    constructor(props) {
        super(props);
        this.state = { value: 'select'};

    //     this.deleteAccount = this.deleteAccount.bind(this);
    // this.logout = this.logout.bind(this);
        this.onChange=this.onChange.bind(this)        
        this.state = {
                emailId: 'neelima@gmail.com',
                mobileNo: '9080784567',
                yearOfManufacture: '2017',
                vehicleMostlyDrivenOn: 'Roads',
                carRegisteredCity: '24PARGANAS',
                vehicleManufacturerName: 'TVS',
                vehicleModelCode: 'ZWTV310',
                vehicleRegDate: '29/06/2018',
                lastName: 'RANI',
                
                // emailId: '',
                // mobileNo: '',
                // yearOfManufacture: '',
                // vehicleMostlyDrivenOn: '',
                // carRegisteredCity: '',
                // vehicleManufacturerName: '',
                // vehicleModelCode: '',
                // vehicleRegDate: '',
                // lastName: '',
                
            };
            this._translationValue = RX.Animated.createValue(-100);
            this._animatedStyle = RX.Styles.createAnimatedTextStyle({
                transform: [
                    {
                        translateY: this._translationValue
                    }
                ]
            });
        }


       
      componentDidMount(){

        

        

        
       this.onChangePostt1=() => { 
    
console.log("kavitha.......");

        
      fetch('http://localhost:8082/calculatepremium', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
                'x-access-token': token
            },
            
            body: JSON.stringify({
                "CalculatePremiumRequest": {
                  "authenticationDetails": {
                    "agentId": "AG023760",
                    "apikey": "310ZQmv/bYJMYrWQ1iYa7s43084="
                  },
                  "externalReferenceNumber": "string",
                  "process": "CalucalutePremium",
                  "proposerDetails": {
                    "GSTIN": "string",
                    "ResidenceAddressFour": "string",
                    "ResidenceAddressOne": "twlmbkd",
                    "ResidenceAddressThree": "string",
                    "ResidenceAddressTwo": "bqjwels",
                    "ResidenceCity": "CHENNAI",
                    "ResidencePinCode": "600032",
                    "aadharNumber": "987456321012",
                    "dateOfBirth": "12/08/1990",
                    "emailId": "blablabla@xerago.com",
                    "firstName": "abcdef",
                    "guardianAge": "54",
                    "guardianName": "ghijkl",
                    "lastName": "ghijkl",
                    "mobileNo": "9000000004",
                    "nomineeAge": "14",
                    "nomineeName": "abcdef",
                    "occupation": "Armed Forces",
                    "panNumber": "EAVPS1254J",
                    "permanentAddress1": "twlmbkd",
                    "permanentAddress2": "bqjwels",
                    "permanentAddress3": "string",
                    "permanentAddress4": "string",
                    "permanentCity": "CHENNAI",
                    "permanentPincode": "600032",
                    "relationshipWithNominee": "Spouse",
                    "relationshipwithGuardian": "Spouse",
                    "sameAdressReg": "No",
                    "strPhoneNo": "string",
                    "strStdCode": "string",
                    "title": "Mr"
                  },
                  "source": "Microsite",
                  "vehicleDetails": {
                    "VIRNumber": "string",
                    "accidentCoverForPaidDriver": "10000",
                    "chassisNumber": "31823114312",
                    "claimAmountReceived": "1000",
                    "claimsMadeInPreviousPolicy": "No",
                    "claimsReported": "1",
                    "companyNameForCar": "xyz",
                    "cover_elec_acc": "Yes",
                    "cover_non_elec_acc": "Yes",
                    "discountIdvPercent": "-10",
                    "electricalAccessories": {
                      "electronicAccessoriesDetails": {
                        "MakeModel": "jPwYFkokuD",
                        "NameOfElectronicAccessories": "MRkyDzbAVd",
                        "Value": "0"
                      }
                    },
                    "engineCapacityAmount": "125 CC",
                    "engineNumber": "3312312312",
                    "financierName": "Reliance",
                    "fuelType": "Petrol",
                    "idv": "0",
                    "isBreakinInsurance": "string",
                    "isPreviousPolicyHolder": "true",
                    "isTwoWheelerFinanced": "Yes",
                    "isTwoWheelerFinancedValue": "Hypothecation",
                    "isVehicleInspected": "Yes",
                    "legalliabilityToEmployees": "Yes",
                    "legalliabilityToPaidDriver": "Yes",
                    "modelName": "Pantero Kick Alloy-2 Seater",
                    "modifiedIDVfor2Year": "26904",
                    "modifiedIDVfor3Year": "23060",
                    "modifiedIDVfor4Year": "23060",
                    "modifiedIDVfor5Year": "23060",
                    "modifiedIdv": "30747",
                    "ncbcurrent": "50",
                    "ncbprevious": "0",
                    "noClaimBonusPercent": "6",
                    "nonElectricalAccesories": {
                      "nonelectronicAccessoriesDetails": {
                        "MakeModel": "jPwYFkokuD",
                        "NameOfElectronicAccessories": "MRkyDzbAVd",
                        "Value": "0"
                      }
                    },
                    "personalAccidentCoverForUnnamedPassengers": "30000",
                    "planOpted": "Flexi Plan",
                    "policyTerm": "1",
                    "previousInsurerName": "BAJAJ ALLIANZ GENERAL INSURANCE COMPANY LTD",
                    "previousPolicyExpiryDate": "15/07/2018",
                    "previousPolicyNo": "NGoD18fWoRgy",
                    "previousPolicyType": "Comprehensive",
                    "productName": "BrandNewTwowheeler",
                    "region": "South Region",
                    "registrationNumber": "TN 01 AB 1234",
                    "towingChargesCover": "No",
                    "towingChargesCover_SI": "300",
                    "typeOfCover": "Bundled",
                    "vechileOwnerShipChanged": "Yes",
                    "vehicleInspectionDate": "03/09/2018 04:00:00",
                    "vehicleManufacturerName": "Honda Motors Ltd.",
                    "vehicleModelCode": "ZWTV130",
                    "vehicleRegDate": "18/09/2018",
                    "vehicleRegisteredInTheNameOf": "Individual",
                    "vehicleSubLine": "motorCycle",
                    "voluntaryDeductible": "0",
                    "yearOfManufacture": "2018",
                    "carRegisteredCity": "HYDERABAD"
                  }
                }
              }),
                    }).then((response) => response.json()).then((responseJson1) => {
                 // res = responseJson.response;
                 console.log(responseJson1)
                 resJson1 = responseJson1.response;
                 //resJson1 = JSON.parse(res)
                
                // console.log(resJson1)
                 // message = resJson1.PREMIUMDETAILS.Status.Message
                  console.log(message,"kavviiiiiiiiiiiiiiiiiiiiiiii")
      
      
      
      
                // console.log(resJson1)
                 
      
      
      
      
      
      
                 if (message==="Premium Calculated and Quote Saved Successfully"){
                  resJson = resJson1.PREMIUMDETAILS.DATA.IDV
                  quoteid = resJson1.PREMIUMDETAILS.DATA.QUOTE_ID
                  premium = resJson1.PREMIUMDETAILS.DATA.PREMIUM
                  liability = resJson1.PREMIUMDETAILS.DATA.LIABILITY
                  odpremium = resJson1.PREMIUMDETAILS.DATA
                 console.log("quoteid",quoteid)
                 console.log("neenenne",resJson1)
                 console.log("liablity",liability)
                 console.log("message",message)
                 console.log("premium",premium)
                 console.log("odpremium",odpremium)
                 
                 }
                 this.props.onNavigateTen(token,resJson1); 
                 fetch("http://localhost:8082/royalmasterdetail",
                
                    
                    
                ).then((response) => response.json()).then((responseJson3) =>  {
             var res1 = responseJson3;
             console.log(res1,"kkkkkkkkkkkkkkkkkkkkkk")




                 fetch('http://localhost:8082/bharathiquickquote', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        
                        'x-access-token': token
                    },
                    
                    body: JSON.stringify({

                 
                    Body: {
                       serve: {
                          SessionDoc: {
                             Session: {
                                SessionData: {
                                   Index: "1",
                                   InitTime: "Thu, 13 Apr 2017 16:55:39 GMT",
                                   UserName: "signMtr",
                                   Password: "AZg3Q1SktWKLz0Os/H0MlAxFfI75pjnpKjn9xrV9vimyyS7/5Ilil/ftcP5oHxC7IFYLVF0C3MAJcIznwrZvDA==",
                                   OrderNo: "NA",
                                   QuoteNo: "NA",
                                   Route: "INT",
                                   Contract: "MTR",
                                   Channel: "polbaz",
                                   TransactionType: "Quote",
                                   TransactionStatus: "Fresh",
                                   ID: "149208275275017943554968",
                                   UserAgentID: "2C000098",
                                   Source: "2C000098"
                                },
                                Vehicle: {
                                   TypeOfBusiness: "TR",
                                   AccessoryInsured: "N",
                                   NonElecAccessoryInsured: "N",
                                   AccessoryValue: "0",
                                   BiFuelKit: {
                                      IsBiFuelKit: "N",
                                      BiFuelKitValue: "0",
                                      ExternallyFitted: "N"
                                   },
                                   DateOfRegistration: "2014-04-01T00:00:00.000",
                                   DateOfManufacture: "2014-04-01T00:00:00.000",
                                   RiskType: "FTW",
                                   Make: "HERO MOTOR CORP",
                                   Model: "PASSION",
                                   FuelType: "P",
                                   Variant: "X PRO DRUM DISC SELF",
                                   IDV: "41208",
                                   VehicleAge: "4",
                                   CC: "110",
                                   PlaceOfRegistration: "Bettiah",
                                   SeatingCapacity: "2",
                                   VehicleExtraTag01: null,
                                   RegistrationNo: "BR22S3564",
                                   ExShowroomPrice: "52297",
                                   PaidDriver: "False"
                                },
                                Quote: {
                                   LLDriver: "false",
                                   ExistingPolicy: {
                                      Claims: "0",
                                      NCB: "35",
                                      PolicyType: "Comprehensive",
                                      EndDate: "2018-07-06T23:59:59.000"
                                   },
                                   PolicyStartDate: "2018-07-31T00:00:00.000",
                                   Deductible: "0",
                                   PAFamilySI: "0",
                                   AgentNumber: null,
                                   DealerId: null,
                                   Premium: {
                                      Discount: null
                                   },
                                   SelectedCovers: {
                                      CarDamageSelected: "True",
                                      PAFamilyPremiumSelected: [
                                         "true",
                                         "true"
                                      ],
                                      TPLiabilitySelected: "True",
                                      PADriverSelected: "True"
                                   },
                                   PolicyEndDate: "2019-07-14T23:59:59.000"
                                },
                                Client: {
                                   ClientType: "Individual",
                                   CltDOB: null,
                                   FinancierDetails: {
                                      IsFinanced: "0"
                                   },
                                   GivName: "TW238275707201704130455394890",
                                   SurName: null,
                                   ClientExtraTag01: "BIHAR",
                                   CityOfResidence: "Bettiah",
                                   EmailID: "pb@pb.com",
                                   MobileNo: "9777777777",
                                   RegistrationZone: "B"
                                }
                             }
                          }
                       }
                    }
                 }),
                 

               
                
            }).then((response) => response.json()).then((responseJson2) => {
                 res = responseJson2.response;
                 resJson2 = JSON.parse(res)
                console.log(resJson2,"kavi")
                
                var BXorderno = resJson2.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.OrderNo.$t;
                var BXquoteno = resJson2.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.QuoteNo.$t;
 
                 TotalPremium=resJson2.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.PremiumSet.PremiumDetails.TotalPremium
             console.log(TotalPremium,"total")
               console.log(BXorderno,"honeyyyyyyyyy")
                console.log(BXquoteno,"honeyyyyyyyyy1")


           

            






                 
           console.log("1")
               
               // this.props.onNavigateTen(resJson,liability,message,quoteid,premium,odpremium,token); 
            
            // onChangePostt = () => {
                // debugger;
                console.log("hittinh.......")
             fetch('http://localhost:8082/digitgo2wquickquote', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        
                        'x-access-token': token
                    },
                    body: JSON.stringify({
                 
                        
                            contract: {
                              insuranceProductCode: "20202",
                              startDate: "2018-07-31",
                              endDate: "2019-07-31",
                              term : 1,
                              salesChannel : "ABSA",
                              questions : {
                                wantTrailerInsured : false,
                                employeesInsured : 0,
                                driversInsured : 0,
                                nonFarePassengersInsured : 5
                              },
                              coverages : {
                                baseCover : {
                                  thirdPartyLiabilityCover : {
                                    selection : true,
                                    insuredAmount: 100000
                                  },
                                  ownDamageCover : {
                                    selection : false,
                                    plan : "PLAN_D",
                                    discountPercent : 0
                                  },
                                  theftCover : {
                                    selection : false
                                  },
                                  fireCover : {
                                    selection : false
                                  }
                                },
                                addOnCover : {
                                  partsDepreciationCover : {
                                    selection : false,
                                    plan : "PLAN_E",
                                    numberOfClaimsCovered : "TWO",
                                    coPay : 0
                                  },
                                  engineAndGearBoxProtectionCover : {
                                    selection : false
                                  },
                                  consumableCover : {
                                    selection : false
                                  },
                                  breakdownAssistanceCover : {
                                    selection : false,
                                    plan : "PLAN_C"
                                  },
                                  returnToInvoiceCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  },
                                  tyreProtectCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  },
                                  rimDamageCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  }
                                },
                                additionalCover : {
                                  otherDriverCover : {
                                    selection : false,
                                    insuredAmount : 200000
                                  },
                                  paUnnamedPersonCover : {
                                    selection : true,
                                    insuredAmount : 100000
                                  },
                                  paOwnerDriverCover : {
                                    selection : true,
                                    insuredAmount : 200000
                                  }
                                },
                                accessoriesCover : {
                                  electricalCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  },
                                  nonElectricalCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  },
                                  cngCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  }
                                }
                              },
                              voluntaryDeductible : "ZERO"
                            },
                            vehicle : {
                              isVehicleNew : true,
                              idv : 0,
                              annualMileage : "8001",
                              mainCode : "1210211901",
                              licensePlate : "MH03",
                              vehicleIdentificationNumber : "--",
                              engineNumber : "--",
                              permitAgency : "MH03",
                              manufactureDate : "2018-02-01",
                              initialRegistrationDate : "2018-06-26",
                              permitUsageType : null,
                              vehicleType : null,
                              usageType : null,
                              trailer : null,
                              hypothecation : {
                                isHypothecation : false,
                                hypothecationAgency : null,
                                hypothecationCIty : "Pune"
                              }
                            },
                            previousInsurer : {
                              previousInsurerCode : null,
                              previousInsurerPolicyNumber : null,
                              previousInsurerPolicyExpiryDate : "2018-07-31",
                              claimInLastYear : false,
                              previousNoClaimBonus : "ZERO"
                            },
                            pinCode : "400015",
                            enquiryId :uniqid(),
                            security : {
                              webUserId : "25860711",
                              password : "digit123"
                      }
                       
            
                 
                    })
                
                    }).then((response) => response.json()).then((responseJson1) => {
                        console.log(responseJson1,"kavi")
                         idv = responseJson1.response.idv;
                         enquiryId = responseJson1.response.enquiryId;
                         totalGrossPremium = responseJson1.response.totalGrossPremium;
                        console.log(totalGrossPremium,"premium")
                        console.log(enquiryId,"enquiryId")
                       // var resJson1 = JSON.parse(res)
                       // var idv = res.idv;
                        console.log(idv,"kavithaaaaaaaaaaa")
                        console.log(token,"insurance page")
                                    
                        console.log(enquiryId,"outside")
                        //onChangePostt1=() => { 

                            // this.props.onNavigateTen(resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium,TotalPremium,resJson2); 
                            // this.props.navigation.navigate('onNavigateTen', { resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium,TotalPremium,resJson2 })
                
                
                      //  }
                
                        // this.props.onNavigateTen(resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium); 
                        // this.props.onNavigateTen(resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium,TotalPremium,resJson2); 

        }).catch(function(){
            console.log(error);
        });


}).catch(function(){
    console.log("error");
});

                 })

                      })

}
        }
    
        //  onChangePostt1=() => { 

        //      this.props.onNavigateTen(token,resJson1); 



        // }

    

    onChangePost = () => {
        console.log(token,"my token")
        this.props.onPressNavigate(token);
    }
    onChangeyearOfManufacture= (value) => {
        this.setState({yearOfManufacture: value });
        console.log(this.state.yearOfManufacture,"yearOfManufacture");
    }
    onChangecarRegisteredCity= (value) => {
        this.setState({carRegisteredCity: value });
        console.log(this.state.carRegisteredCity,"carRegisteredCity");
    }
    onChangevehicleRegDate = (value) => {
        this.setState({vehicleRegDate  : value });
        console.log(this.state.vehicleRegDate ,"vehicleRegDate ");
    }
    onChangevehicleManufacturerName = (value) => {
        this.setState({ vehicleManufacturerName: value });
        console.log(this.state.vehicleManufacturerName,"vehicleManufacturerName");
    }
    onChangevehicleModelCode= (value) => {
        this.setState({vehicleModelCode : value });
        console.log(this.state.vehicleModelCode,"vehicleModelCode");
    }
    onChangevehicleMostlyDrivenOn= (value) => {
        this.setState({vehicleMostlyDrivenOn: value });
        console.log(this.state.vehicleMostlyDrivenOn,"vehicleMostlyDrivenOn");
    }
    onChangemobileNo = (value) => {
        this.setState({ mobileNo: value });
        console.log(this.state.mobileNo,"mobileNo");
    }
    onChangelastName = (value) => {
        this.setState({ lastName: value });
        console.log(this.state.lastName,"lastName");
    }
    onChangeemailId = (value) => {
        this.setState({ emailId: value });
        this.props.onUpdate(value);
        console.log(this.state.emailId,"email");
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
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
    onChange(e) {
        this.setState({
          value: e.target.value
        })
       
           
        
      }

      

    render() {
        token = this.props.navigatorRoute.token

        // token = this.props.navigatorRoute.token
        resJson = this.props.navigatorRoute.resJson
        liability = this.props.navigatorRoute.liability
        message = this.props.navigatorRoute.message
        quoteid =  this.props.navigatorRoute.quoteid
        premium = this.props.navigatorRoute.premium
        odpremium = this.props.navigatorRoute.odpremium
        enquiryId = this.props.navigatorRoute.enquiryId
        responseJson1 = this.props.navigatorRoute.responseJson1
        idv = this.props.navigatorRoute.idv
        totalGrossPremium = this.props.navigatorRoute.totalGrossPremium
        responseJson2 = this.props.navigatorRoute.responseJson2
        TotalPremium = this.props.navigatorRoute.TotalPremium
                res1 = this.props.navigatorRoute.res1
               // BXorderno = this.props.navigatorRoute.BXorderno
               // BXquoteno = this.props.navigatorRoute.BXquoteno
                resJson2 = this.props.navigatorRoute.resJson2

         console.log(token,"token????????")
         console.log(res1,"honeyyyyyyyyyyyy")
        //  console.log(BXorderno,"bxorderno")
        //  console.log(BXquoteno,"bxquoteno")
         console.log(resJson2,"kaaaaaaaaaaaaaaaaaaaaa")

      let rows=[];
     var  dropdownItem=res1
      for (let i = 0; i < 31; i++) {
          console.log("length")
        rows.push(<DMenuItem text={dropdownItem[i]}/>);
    } 
         return (
            <RX.ScrollView style={ _styles.scroll }>
            <RX.View style={ styling.container }>
            <RX.Button  onPress={()=> this.onChangePost()}><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                   <RX.Animated.Text style={ [styling.welcome, this._animatedStyle] }>
                     Get Quote
                    </RX.Animated.Text>
                   </RX.Button>
                {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
                    <RX.Text style={ styling.buttonText }>
                        Go Back
                    </RX.Text>
                </RX.Button>*/}
            </RX.View>
                 <Grid>
                 <div class="steps-form-2">
    <div class="steps-row-2 setup-panel-2 d-flex justify-content-between">
        <div class="steps-step-2">
            <a href="#step-1" type="button" class="btn btn-amber btn-circle-2 waves-effect ml-0" data-toggle="tooltip" data-placement="top" title="Quote Details"><i class="fa fa-folder-open-o" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-2" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Vehicle Details"><i class="fa fa-pencil" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-3" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Personal Information"><i class="fa fa-photo" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-4" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect mr-0" data-toggle="tooltip" data-placement="top" title="Payment"><i class="fa fa-check" aria-hidden="true"></i></a>
        </div>
    </div>
</div>
                 <div class="jumbotron" style={ _styles.SCROLL}> 
                 <form data-toggle="validator">
  <div class="form-row">
    
      <label for="inputEmail4" style={ styling.SIDETEXT }>Please enter vehicle details to get your Quote</label>
      </div>
    
      </form>             
                 <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Manufacturer Year</label> 
                                         {/* <RX.TextInput
                                                 style={styling.Form} type="year" 
                                                 placeholder=" YYYY"
                                                // value={ this.state.yearOfManufacture}
                                                 min="2005" max="2030"
                                                 onChangeText={this.onChangeyearOfManufacture}
                                                
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                               */}
                                               <select class="form-control" >
  <option>select</option>
    <option>2011</option>
    <option>2015</option>
    <option>2017</option>
    <option>2013</option>
    
  </select>
                                    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" style={ styling.sideText }>Car Registered City</label>
                                         
                                        
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Car Register city"
                                                 value={ this.state.carRegisteredCity }
                                                 onChangeText={this.onChangecarRegisteredCity}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                            
                                            </div>
  </div>
  </form>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4"  style={ styling.sideText }>Vehicle Register Date</label> 
      <div class="form-row">
      
                                    <input type="date" id="party"  style={ styling.Form } name="party"  min="2017-apr-01" max="2030-apr-20" required/>
                                        </div>  
                                     </div>
                                          <div class="form-group col-md-6">
      {/* <label for="inputPassword4" style={ styling.sideText }>Vehicle Manufacturer Name</label>                                      */}
                                             {/* <RX.TextInput
                                                 style={styling.Form}

                                                 
                                                 placeholder="Vehicle manufacturer name"
                                                 
                                                 value={ res1}
                                                 onChangeText={this.onChangevehicleManufacturerName}
                                                 
                                             /> */}
                                              <div class="form-group col-md-6">
  <label  for="inputEmail4" style={ styling.sideText}>Vehicle manufacturer Name</label>
  <select class="form-control" >
  <option>select</option>
 
    <option>{res1[0]}</option>
    <option>{res1[1]}</option>
    <option>{res1[2]}</option>
    <option>{res1[3]}</option>
    <option>{res1[4]}</option>
    <option>{res1[5]}</option>
    <option>{res1[6]}</option>
    <option>{res1[7]}</option>
    <option>{res1[8]}</option>
    <option>{res1[9]}</option>
    <option>{res1[10]}</option>
    <option>{res1[11]}</option>
    <option>{res1[12]}</option>
    <option>{res1[13]}</option>
    <option>{res1[14]}</option>
    <option>{res1[15]}</option>
    <option>{res1[16]}</option>
    <option>{res1[17]}</option>
    <option>{res1[15]}</option>
    <option>{res1[16]}</option>
    <option>{res1[17]}</option>
    
  </select>
 </div>
                                                  {/* <div class="form-group col-md-6">
        <DropdownMenu triggerType='text' value={this.state.value} onSelect={this.onChange.bind(this)}  
        style={{height:'10px',overflowY: 'scroll'}}>
           {rows}
        </DropdownMenu>
        </div> */} 
       
                {/* <div className="form-group">
        <label htmlFor="select1" >Select1</label> */}

        

         {/* <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
        //   <option value="select">Select an Option</option>

          
        //   <option value="First" layout='vertical'>{rows}</option>
        
        // </select> */}
        {/* <Select options={options}/>
      </div> */}
                                              </div>
                                              </div>
                                              </form>
  <form>
 <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Vehicle Model Code</label> 
                                    
                                        
                                         
                                             {/* <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Vehicle model code"
                                                 value={ this.state.vehicleModelCode}
                                                 onChangeText={this.onChangevehicleModelCode}
                                                 // defaultValue={ this.state.inputValue }
                                             /> */}
                                            
  <select class="form-control" >
  <option>select</option>
    <option>ZWTV310</option>
    <option>ZWTV311</option>
    <option>ZWTV312</option>
    <option>ZWTV313</option>
    
  </select>
                                             
                                     </div>
      <div class="form-group col-md-6">
      <label for="inputPassword4" style={ styling.sideText }>Vehicle Mostly Driven On</label> 

      <select class="form-control" >
  <option>select</option>
    <option>ROADS</option>
    <option>HILLS</option>
    <option>RURAL</option>
    <option>URBAN</option>
    
  </select>    
                                     
                                        
                                             {/* <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="vehicle mostly driven on"
                                                 value={ this.state.vehicleMostlyDrivenOn }
                                                 onChangeText={this.onChangevehicleMostlyDrivenOn}
                                                 // defaultValue={ this.state.inputValue }
                                             /> */}
                                            
                                            </div>
                                            </div>
                                              </form>
                                              <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Name</label> 
                                    
                                         
                                        
 
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Last Name"
                                                 value={ this.state.lastname }
                                                 onChangeText={this.onChangelastName }
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                              
                                        </div>
                                        <div class="form-group col-md-3">
      <label for="inputPassword4" style={ styling.sideText }>Email ID</label>     
                                        
 
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 pattern=".+@beststartupever.com"
                                                 placeholder="Email id"
                                                 value={ this.state.emailId }
                                                 onChangeText={this.onChangeemailId}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                        </div>
                                            </div>
                                            <div class="form-group col-md-3">     
                                      
                                            <label for="inputPassword4" style={ styling.SIdeText }>Mobile No</label> 
                                         
                                             <RX.TextInput
                                                 style={styling.FOrm}
                                                 placeholder="Mobile no"
                                                 value={ this.state.mobileNo }
                                                 onChangeText={this.onChangemobileNo}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                           </div> 
                                           {/* <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>enquiryId</label> 
      <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Last Name"
                                                 //value={ this.state.lastname }
                                                 value={this.kavitha }
                                                 // defaultValue={ this.state.inputValue }
                                             />
     
      </div>
      </div>   */}
                                         </form>
               
                                         {/* <RX.Button style={styling.button} onPress={()=> this.onPress}>Get Quote</RX.Button>             */}
                                         <RX.Button style={styling.button} onPress={(event)=> this.onChangePostt1()}>Get Quote</RX.Button>            

                   </div>   
              
                 </Grid>
 
 
                 
 
 
 
 
 
 
 
 
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