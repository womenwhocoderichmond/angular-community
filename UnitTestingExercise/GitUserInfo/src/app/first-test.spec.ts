//Jasmine Test Basics

describe("trying jasmine basics",()=>{
    let someVariableToTest:string;
    let someObject={
        count:0
    }
    // this is good place to initialize values of variables used across various test cases
    beforeEach(()=>{
        someVariableToTest = "Happy Testing"
        someObject.count++;
    })
    
    /*****************************/
    //Replace this comment with Exercise step #5
    /*****************************/
    it("should run beforeEach before this test start", ()=>{
        expect(someVariableToTest).toBe("Happy Testing");
        expect(someObject.count).toBe(1);
    })
    
    /*****************************/
    // EXERCISE:
    //1. Just like test above, verify 'someVaribaleToTest' is "Happy Testing" 
    //2. Verify someObject.count value
    //3. set 'someVaribaleToTest' to another value
    //4. Verify someVariableToTest is now set to the value you specified in step 3
    //5. Just like beforeEach, jasmine provides another function afterEach. Implement afterEach function and reset value of someObject.count to be 0
    //7. Observe the behavior of your test. Update your test to pass/
    /****************************/

    it("should follow instructions in Exercise", ()=>{
        
    })
})