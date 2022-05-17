<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Package extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('Package_model', '', TRUE);
    }

    public function index() {
		
		//page level css test
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin test
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.dataTables.min.js');
		
		
		//Third-Party Plugins
		$this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
		//Custom Jquery Validation Library
		$this->data['title'] = "List";
        $this->data['page_title'] = "Package";
        $this->data['active_tab'] = "package";
        $this->data['page_content'] = "package/index";

        $this->data['packagelist'] = $this->Package_model->get_package();

        $this->load->view('template', $this->data);
    }
	
	public function add_package() {
		//page level css test
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin test
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.validate.min.js');
        
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
        
        $this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'packagename',
						 'label'   => 'Package Name',
						 'rules'   => 'required'
					  ),
                   array(
						 'field'   => 'packageprice',
						 'label'   => 'Package Price',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'nbid',
						 'label'   => 'No. of Bid',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'packagename'  => array( 'required'    => "Package Name is required"),
                         'packageprice'  => array( 'required'    => "Package Price is required"),
						 'nbid'  => array( 'required'    => "No. of Bid is required"),
                         );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
        
        $this->data['title'] = "List";
        $this->data['page_title'] = "Package";
        $this->data['active_tab'] = "package";
        $this->data['page_content'] = "package/add";
        
        $this->data['validation_script']=$this->jquery_validation->run('#package_form');
        
		$this->form_validation->set_rules('packagename', 'Package Name', 'trim|required');
        $this->form_validation->set_rules('packageprice', 'Package Price', 'trim|required');
        $this->form_validation->set_rules('nbid', 'No. of Bid', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            $this->load->view('template', $this->data);
        } else {
                $pname = $this->input->post('packagename');
                $price = $this->input->post('packageprice');
				$packagebid = $this->input->post('nbid');
				$packagedescr = $this->input->post('pdescr');
                $img_name = $this->input->post('packagefile');
                $img_exist_name = $this->input->post('photo_name');
        
                $path= base_url('assets/uploads/' . $img_exist_name);
			
				
				//Transfering data to Model
				$countpackage = $this->Package_model->package_exist($pname);
				if(count($countpackage)==0)
				{
                    if(file_get_contents($path))
                    {
                        $img_name=$img_exist_name;
                    }
                    else
                    {
                        $dir = './assets/uploads';
                        if (!file_exists($dir) && !is_dir($dir)) {
                            mkdir($dir, 0755, true);
                        }
                        //gif|jpg|jpeg|png|iso|dmg|zip|rar|doc|docx|xls|xlsx|ppt|pptx|csv|ods|odt|odp|pdf|rtf|sxc|sxi|txt|exe|avi|mpeg|mp3|mp4|3gp
                        $img_config = array();
                        $img_config['upload_path'] = $dir;
                        $img_config['allowed_types'] = 'gif|jpg|png|jpeg';
                        $this->load->library('upload', $img_config);
        
                        $this->upload->do_upload('packagefile');
                        $path = $this->upload->data();
                        $img_name = $path['file_name'];
                    }
                    
                    $service_param = array(
                    'pname' => $pname,
                    'pprice' => $price,
                    'photo' => $img_name,
					'package_descr'=>$packagedescr,
					'bid' => $packagebid
                    );
					$package_id = $this->Package_model->package_insert('package_master', $service_param);
					$this->session->set_flashdata('success', 'Successfully Saved '.$pname.' Package.');
                    
				}
				else
				{
					$this->session->set_flashdata('error', $pname.' Package Name is already exist.');
				}
				redirect(base_url('index.php/package/index'));
		}
    }
	
	public function delete_package($id) {
		
        $this->data['package_data'] = $this->Package_model->get_package($id);
		$pname=$this->data['package_data'][0]->pname;
		
		$this->Package_model->package_delete('package_master',$id,'package_id');

		$this->session->set_flashdata('success', 'Successfully Deleted '.$pname.' Package.');
		redirect(base_url('index.php/package/index'));
       
        
    }
	
	public function edit_package($id='') {
		//page level css test
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin test
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.validate.min.js');
        
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
        
        $this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'packagename',
						 'label'   => 'Package Name',
						 'rules'   => 'required'
					  ),
                   array(
						 'field'   => 'packageprice',
						 'label'   => 'Package Price',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'nbid',
						 'label'   => 'No. of Bid',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'packagename'  => array( 'required'    => "Package Name is required"),
                         'packageprice'  => array( 'required'    => "Package Price is required"),
						 'nbid'  => array( 'required'    => "No. of Bid is required"),
                         );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
        
        $this->data['title'] = "List";
        $this->data['page_title'] = "Package";
        $this->data['active_tab'] = "package";
        $this->data['page_content'] = "package/edit";
        
        $this->data['validation_script']=$this->jquery_validation->run('#package_form');
		if($id!='')
			$this->data['packagedata'] = $this->Package_model->get_package($id);
		 
		$this->form_validation->set_rules('packagename', 'Package Name', 'trim|required');
        $this->form_validation->set_rules('packageprice', 'Package Price', 'trim|required');
        $this->form_validation->set_rules('nbid', 'No. of Bid', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            $this->load->view('template', $this->data);
        } else {
				$pid = $this->input->post('packageid');
                $pname = $this->input->post('packagename');
                $price = $this->input->post('packageprice');
				$packagebid = $this->input->post('nbid');
				$packagedescr = $this->input->post('pdescr');
                $img_name = $this->input->post('packagefile');
                $img_exist_name = $this->input->post('photo_name');
        
                //$path= base_url('assets/uploads/' . $img_exist_name);
			
				
				//Transfering data to Model
				if($img_exist_name!="")
				{
					$path= base_url('assets/uploads/' . $img_exist_name);
					if(file_get_contents($path))
					{
						$img_name=$img_exist_name;
						$service_param = array(
							'pname' => $pname,
							'pprice' => $price,
							'photo' => $img_name,
							'package_descr'=>$packagedescr,
							'bid' => $packagebid
							);
					}
				}
				else
				{
				
                    if($img_name!='')
                    {
                        $dir = './assets/uploads';
                        if (!file_exists($dir) && !is_dir($dir)) {
                            mkdir($dir, 0755, true);
                        }
                        //gif|jpg|jpeg|png|iso|dmg|zip|rar|doc|docx|xls|xlsx|ppt|pptx|csv|ods|odt|odp|pdf|rtf|sxc|sxi|txt|exe|avi|mpeg|mp3|mp4|3gp
                        $img_config = array();
                        $img_config['upload_path'] = $dir;
                        $img_config['allowed_types'] = 'gif|jpg|png|jpeg';
                        $this->load->library('upload', $img_config);
        
                        $this->upload->do_upload('packagefile');
                        $path = $this->upload->data();
                        $img_name = $path['file_name'];
						
                    }
                    else
                    {
                        $service_param = array(
						'pname' => $pname,
						'pprice' => $price,
						'photo' => $img_name,
						'package_descr'=>$packagedescr,
						'bid' => $packagebid
						);
                    }
				}   
                   
					$package_id = $this->Package_model->package_update('package_master', $service_param,$pid,'package_id');
					$this->session->set_flashdata('success', 'Successfully Modified '.$pname.' Package.');
                    
				
				
				redirect(base_url('index.php/package/index'));
		}
    }
}
