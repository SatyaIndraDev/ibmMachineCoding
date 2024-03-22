import { useState } from "react";

import Cards from "react-credit-cards-2"



export const CreditCard= ()=>{ 
    const [formData, setFormData] = useState({
      cardNumber: '',
      cardName: '',
      cardExpiry: '',
      cardCvv: '',
      
      errors: {}
    });
  
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
      
        console.log('Form submitted successfully');
       setFormData( { cardNumber: '',
       cardName: '',
       cardExpiry: '',
       cardCvv: '',
       isFlipped: false,
       errors: {}})
      }
     
    };
  
 
    const validateForm = () => {
      const errors = {};
      const { cardNumber, cardCvv } = formData;
  
      if (!/^\d{16}$/.test(cardNumber)) {
        errors.cardNumber = 'Credit card number must be 16 digits';
      }
  
      if (!/^\d{3}$/.test(cardCvv)) {
        errors.cardCvv = 'CVV must be 3 digits';
      }
  
      setFormData({
        ...formData,
        errors
      });
  
      return Object.keys(errors).length === 0;
    };
  
 
  
    const { cardNumber, cardName, cardExpiry, cardCvv, errors } = formData;
  
    return (
    
        <div   style={{display:"flex" ,justifyContent:"space-between"}}>
       
            
        {cardCvv ? <div style={{width:"400px", height:"200px", backgroundColor:"#cac3d6bc" ,borderRadius:"10px" , margin:"20px 20px"}} >
        
          
          <div className="cvv" style={{textAlign:"center"}}>Cvv{cardCvv || '###'}</div>
        

</div>:  <div style={{width:"400px", height:"200px", backgroundColor:"#cac3d6bc" ,borderRadius:"10px" , margin:"20px 20px"}} > <div >
          
          <div >Card Number {cardNumber || '#### #### #### ####'}</div>
          <div >
            <div>Card Holder Name  {cardName || 'Full Name'}</div>
            <div >Expiry Date{cardExpiry || 'MM/YY'}</div>
          </div>
        </div>
        
      </div> }


        
        <form  onSubmit={handleSubmit} style={{margin :"20px"}}>
          <div>
            <label >Card Number:</label>
            <input type="text"  name="cardNumber" value={cardNumber} onChange={handleInputChange} maxLength="16"  
            style={{borderRadius:"20px",marginLeft:"5px"}}
            />
            <div>{errors.cardNumber}</div>
          </div>
          <div >
            <label htmlFor="cardName">Cardholder Name:</label>
            <input type="text"  name="cardName" value={cardName} onChange={handleInputChange} 
              style={{borderRadius:"20px",marginLeft:"5px"}}
            
            />
          </div>
          <div>
            <label >Expiration Date:</label>
            <input type="text" id="cardExpiry" name="cardExpiry" value={cardExpiry} onChange={handleInputChange} placeholder="MM/YY"
              style={{borderRadius:"20px",marginLeft:"5px"}} />
          </div>
          <div >
            <label htmlFor="cardCvv">CVV:</label>
            <input type="text" id="cardCvv" name="cardCvv" value={cardCvv} onChange={handleInputChange} maxLength="3"
              style={{borderRadius:"20px",marginLeft:"5px"}} />
            <div >{errors.cardCvv}</div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      
    )
  }
