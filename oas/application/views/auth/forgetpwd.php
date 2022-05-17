<div id="core_padding">

	    
     
    
        
    <div id="core_padding_inner">

	<div class=" container widecontainer core_section_top_container">
    
     

		<div class="row core_section_top_row wlt_main_2colsright">
 

 <div id="core_inner_wrap" class="clearfix">   

	 
 		
	
		 
	<article class="col-md-12" id="core_middle_column"><div class="core_middle_wrap"><div id="core_ajax_callback"></div>	
	 
       
		
 

<div class="row">



<div class="col-md-4 col-md-offset-4">

	<!--<div class="bs-callout bs-callout-info">
				<button type="button" class="close" data-dismiss="alert">x</button>
				<h4 class="alert-heading">Demo Account Logins</h4>
				<p>You can login with the details below to test our the members and admin areas.</p>
				<p>
				  Username: <b>demo</b> / Password: <b>demo</b>
				</p>
				<p>Username: <b>admindemo</b> / Password: <b>admindemo</b> </p>
	</div>-->
	
<div class="panel panel-default" id="login_box">

<div class="panel-heading">Forgot Password</div>

	<div class="panel-body"> 
    
    
    
    
    
	<?php echo '<p class="error">'.$this->session->flashdata('error').'</p>'; ?> 
    <script language="javascript" type="text/javascript">



		function CheckFormData()

		{

 

 		

			var email 	= document.getElementById("email"); 

		
			var flag=0;

			

						

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
    <form class="loginform" id="forgotpwdform" action="<?php echo base_url('index.php/auth/forgot_pwd'); ?>" method="post" onsubmit="return CheckFormData();"> 
    
    
        
                <div class="form-group clearfix">
                  <label for="user_login">Email Id</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                       <input type="text" name="email" id="email" class="form-control" value=""> 
                    </div>              
                </div>
    
                  
                                 
                <hr />
                
                <div class="text-center">
                 <input type="submit" name="wp-submit" id="wp-submit" class="btn btn-primary btn-lg" style="width:100%;" value="Send">  
                
                </div>
                
  </form>
                
               
                <hr />
                
                                
                <a href="<?php echo base_url('index.php/auth/register'); ?>" class="btn btn-default">Register</a>
                
                                
                <a href="<?php echo base_url('index.php/auth/login'); ?>" class="btn btn-default pull-right">Login</a>
                
               
   
          
	</div>
     
</div>    


</div> 
</div>



	
 	
                
                
       </div></article>
        
 
               
        
          
    
        
    </div>
    
    </div>
    
	</div>

	</div> 