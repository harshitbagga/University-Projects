<div id="core_padding">

	    
     
    
        
    <div id="core_padding_inner">

	<div class=" container widecontainer core_section_top_container">
    
     

		<div class="row core_section_top_row wlt_main_2colsright">
 

 <div id="core_inner_wrap" class="clearfix">   

	 
 		
	
		 
	<article class="col-md-12" id="core_middle_column"><div class="core_middle_wrap"><div id="core_ajax_callback"></div>	
	 
       
		
 

<div class="row">



<div class="col-md-4 col-md-offset-4">

	
	
<div class="panel panel-default" id="login_box">

<div class="panel-heading">Register</div>

	<div class="panel-body"> 
    
    
    
    
    
	<?php echo '<p class="error">'.$this->session->flashdata('error').'</p>'; ?> 	 
     <script language="javascript" type="text/javascript">



		function CheckFormData()

		{

 

 		

			var firstname 	= document.getElementById("firstname"); 

			var lastname 	= document.getElementById("lastname");
				var user_login 	= document.getElementById("user_login");
				var user_pass 	= document.getElementById("user_pass");
				var contactno 	= document.getElementById("contactno");
				var email 	= document.getElementById("email");
			var flag=0;

			

						

			if(firstname.value == '')

			{

			

				firstname.focus();

				firstname.style.border = 'thin solid red';
    flag=1;
				

			}

			if(lastname.value == '')

			{

				

				lastname.focus();

				lastname.style.border = 'thin solid red';
    flag=1;
				

			}
			
			if(user_login.value == '')

			{

				

				user_login.focus();

				user_login.style.border = 'thin solid red';
    flag=1;
				

			}
			
			if(user_pass.value == '')

			{

				

				user_pass.focus();

				user_pass.style.border = 'thin solid red';
    flag=1;
				

			}
			
			if(contactno.value == '')

			{

				

				contactno.focus();

				contactno.style.border = 'thin solid red';
    flag=1;
				

			}
			
			if(email.value == '')

			{

				

				email.focus();

				email.style.border = 'thin solid red';
    flag=1;
				

			}

			if(flag==1)
			{
					alert('Please complete all fields.');
					return false;
			}
			else
					return true;

		}



 

</script>    
    <form class="loginform" id="regform" action="<?php echo base_url('index.php/auth/add_register'); ?>" method="post" onsubmit="return CheckFormData();"> 
    
    
				<div class="form-group clearfix">
                  <label for="firstname">First Name</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                       <input type="text" name="firstname" id="firstname" class="form-control" value=""> 
                    </div>              
                </div>
				
				<div class="form-group clearfix">
                  <label for="lastname">Last Name</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                       <input type="text" name="lastname" id="lastname" class="form-control" value=""> 
                    </div>              
                </div>
				
                <div class="form-group clearfix">
                  <label for="user_login">Username</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                       <input type="text" name="user_login" id="user_login" class="form-control" value=""> 
                    </div>              
                </div>
    
                  <div class="form-group clearfix">
                  <label for="user_pass">Password</label>
                  <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input type="password" name="user_pass" id="user_pass" class="form-control">                  
                  </div>
                </div>
                
				<div class="form-group clearfix">
                  <label for="email">Email</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-send"></i></span>
                       <input type="text" name="email" id="email" class="form-control" value=""> 
                    </div>              
                </div>
				
				<div class="form-group clearfix">
                  <label for="contactno">Contact No.</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-phone"></i></span>
                       <input type="text" name="contactno" id="contactno" class="form-control" value=""> 
                    </div>              
                </div>

                <div class="form-group clearfix">
                  <label for="firstname">Gender</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                       <select  name="Gender" id="Gender" class="form-control" >
                             <option value="M" selected="selected">Male</option>
                             <option value="F">Female</option>
                       </select> 
                    </div>              
                </div>

                
                                 
                <hr />
                
                <div class="text-center">
                 <input type="submit" name="wp-submit" id="wp-submit" class="btn btn-primary btn-lg" style="width:100%;" value="Register">  
                
                </div>
                
  </form>
                
               
               
                
                                
                
                
               
   
          
	</div>
     
</div>    


</div> 
</div>



	
 	
                
                
       </div></article>
        
 
               
        
          
    
        
    </div>
    
    </div>
    
	</div>

	</div> 