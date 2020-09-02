import React from 'react';
import { Text,View,TouchableOpacity,TextInput,Image,StyleSheet,
     Alert,KeyboardAvoidingView} from 'react-native';

     export default class LoginScreen extends React.Component {
         constructor() {
             super();
             this.state= {
                 emailId:"",
                 password:""
             }
         }

         login =async(email,password)=>{
    if(emailId && password){
        try{
            const respone = firebase.auth.signInWithEmailAndPassword(email,password)
            if(respone){
           this.props.navigation.navigate("Transaction")
            }
        }

        catch (error) {
            switch(error.code) {
                case "auth/user-not-found":
                    Alert.alert("User doesn't exist")
                    console.log("User doesn't exist")
                break;
                case "auth/invalid-email":
                     Alert.alert("Incorrect email or password")
                     console.log("invalid email")
                break;
            }
             }
    }

    else{
        Alert.alert("Enter email and password")
    }
         }

         render () {
             return(
                 <KeyboardAvoidingView style={{alignItems: 'center',marginTop:20}}>
                 <View>
                     <Image
                     src={require("../assets/book.png")} 
                     style={{width:200,height:200}}/>
                     <Text style={{textAlign: 'center', fontSize:30}}>Wily</Text>
                 </View>
                 <View>
                     <TextInput style={styles.loginBox} 
                     placeholder="abc@example.com" 
                     keyboardType="email-address" 
                     onChangeText={(text)=>{this.setState({emailId:text})}}/> 

                    <TextInput style={styles.loginBox} 
                     secureTextEntry={true}
                     placeholder="enter password" 
                     onChangeText={(text)=>{this.setState({password:text})}}/> 
                      </View>
                      <View>
            <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
            onPress={()=>{this.login(this.state.emailId,this.state.password)}}>
                    <Text style={{textAlign: 'center'}}> Login </Text>
                          </TouchableOpacity>
                      </View>
                 </KeyboardAvoidingView>
             )
             
         }
     }

   const styles =StyleSheet.create({
loginBox: {
    width:300,
    height:40,
borderWidth:1.5,
fontSize:20,
margin:10,
paddingLeft:20,
},

     })