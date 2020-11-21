process.env.NODE_ENV ='test'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../index'
import request from 'request'
import myData from './myData'
import user from '../modeles/user'

const should = chai.should()
chai.use(chaiHttp)

describe('Authentication', () => {

    // testing authentication signup
    describe('/api/signup', ()=>{
        it('It should not signup without email', (done) =>{
            
            chai.request(server)
                .post('/api/signup')
                .send({
                    userRole: "admin",
                    password: "123456vianney"
                })
                .end((err, res) => {
                    res.should.have.status(400);
                done();

                })
        });
        it('It should not signup with invalid email', (done) =>{
            
            chai.request(server)
                .post('/api/signup')
                .send({
                    email: "hategekamvianney2@gmail.com",
                    userRole: "admin",
                    password: "123456vianney"
                })
                .end((err, res) => {
                    res.should.have.status(400);
                done();

                })
        });

        it('It should not signup if email exist in database', (done) =>{
        
            chai.request(server)
                .post('/api/signup')
                .send(myData.signupWithEmailExist)
                .end((err, res) => {
                    res.should.have.status(409);
                
                
                });
                done();
                
                
        });
        it('It should not signup if there is hash errors', (done) =>{
        
            chai.request(server)
                .post('/api/signup')
                .send(myData.signupErrorOfHasPassword)
                .then((err, res) => {
                    console.log(res.body)
                    res.should.have.status(500);
                
                    })
                .catch( error => console.log(error))
                done();
        });
        
        
        
    })


    // testing authentication sign in
    describe('/api/signin', ()=>{
        it('It should not sign in without email', (done) =>{
            
            chai.request(server)
                .post('/api/signin')
                .send(myData.loginWithoutEmail)
                .end((err, res) => {
                    res.should.have.status(400);
                done();

                })
        });
        // it('It should not sign in with invalid email', (done) =>{
            
        //     chai.request(server)
        //         .post('/api/signin')
        //         .send(myData.loginWithInvalidEmail)
        //         .end((err, res) => {
        //             res.should.have.status(400);
        //         done();

        //         }, 300000)
        // });
        it('It should not sign in with incorrect email', (done) =>{
            
            chai.request(server)
                .post('/api/v1/auth/login')
                .send({
                    email:"hategekamvianney2@gmail.com",
                    password: "123456vianney"
                })
                .then((err, res) => {
                    console.log(res + 'responce')
                    res.should.have.status(404);

                })
                .catch( err => console.log(err))
            done();
        });
        it('It should not sign in without password', (done) =>{
            
            chai.request(server)
                .post('/api/signin')
                .send(myData.loginWithoutPassword)
                .end((err, res) => {
                    res.should.have.status(400);
 
                })
            done();
        });
         it('It should sign in with  all requirements', (done) =>{
            
            chai.request(server)
                .post('/api/signin')
                .send(myData.login)
                .end((err, res) => {
                    res.should.have.status(200);

                })
            done();
        });
        it('It should not sign in with incorrect password', (done) =>{
            
            chai.request(server)
                .post('/api/signin')
                .send(myData.loginWithIncorrectPassword)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.have.property("message");
                    res.body.should.have.property("message").equal('Pssword incorrect!');
                })
            done();
        });
        

     
    })
})