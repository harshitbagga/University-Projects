<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Product extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('Product_model', '', TRUE);
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
        $this->data['page_title'] = "Product";
        $this->data['active_tab'] = "product";
        $this->data['page_content'] = "product/index";

        $this->data['productlist'] = $this->Product_model->get_product();

        $this->load->view('template', $this->data);
    }
	
	public function add_product() {
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
		
		$this->template->add_css('plugins/select2/select2.css');
		$this->template->add_js('plugins/select2/select2.min.js');
		$this->template->add_js('scripts/product/product_list.js');
		
		$this->template->add_css('plugins/datepicker/jquery.datepick.css');
		$this->template->add_js('plugins/datepicker/jquery.plugin.js');
		$this->template->add_js('plugins/datepicker/jquery.datepick.js');

		
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
        
        $this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'productname',
						 'label'   => 'Product Name',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'catid',
						 'label'   => 'Category',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'startdate',
						 'label'   => 'Start Date',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'enddate',
						 'label'   => 'End Date',
						 'rules'   => 'required'
					  ),
                   array(
						 'field'   => 'bidprice',
						 'label'   => 'Bidding Price',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'resprice',
						 'label'   => 'Reserved Price',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'productname'  => array( 'required'    => "Product Name is required"),
                         'catid'  => array( 'required'    => "Category is required"),
						 'startdate'  => array( 'required'    => "Start Date is required"),
						 'enddate'  => array( 'required'    => "End Date is required"),
						 'bidprice'  => array( 'required'    => "Bidding Price is required"),
						 'resprice'  => array( 'required'    => "Reserved Price is required")
                         );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
        
        $this->data['title'] = "List";
        $this->data['page_title'] = "Product";
        $this->data['active_tab'] = "product";
        $this->data['page_content'] = "product/add";
        
        $this->data['validation_script']=$this->jquery_validation->run('#product_form');
        
		$this->form_validation->set_rules('productname', 'Product Name', 'trim|required');
		$this->form_validation->set_rules('catid', 'Category', 'trim|required');
		$this->form_validation->set_rules('startdate', 'Start Date', 'trim|required');
		$this->form_validation->set_rules('enddate', 'End Date', 'trim|required');
        $this->form_validation->set_rules('bidprice', 'Bidding Price', 'trim|required');
        $this->form_validation->set_rules('resprice', 'Reserved Price', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            $this->load->view('template', $this->data);
        } else {
                $pname = $this->input->post('productname');
				$catid = $this->input->post('catid');
				$startdate = $this->input->post('startdate')." ".date('H:i:s');
				$enddate = $this->input->post('enddate')." ".date('H:i:s');
				$pdescr = $this->input->post('pdescr');
				$pstatus = $this->input->post('astatus');
				$pcondition = $this->input->post('pcondition');
                $price = $this->input->post('bidprice');
				$resprice = $this->input->post('resprice');
				$username = $this->session->userdata('username');
                $img_name = $this->input->post('productfile');
                $img_exist_name = $this->input->post('photo_name');
        
                $path= base_url('assets/uploads/' . $img_exist_name);
			
				$dir = './assets/uploads';
				if (!file_exists($dir) && !is_dir($dir)) {
					mkdir($dir, 0755, true);
				}
				//gif|jpg|jpeg|png|iso|dmg|zip|rar|doc|docx|xls|xlsx|ppt|pptx|csv|ods|odt|odp|pdf|rtf|sxc|sxi|txt|exe|avi|mpeg|mp3|mp4|3gp
				$img_config = array();
				$img_config['upload_path'] = $dir;
				$img_config['allowed_types'] = 'gif|jpg|png|jpeg';
				$this->load->library('upload', $img_config);

				$this->upload->do_upload('productfile');
				$path = $this->upload->data();
				$img_name = $path['file_name'];
				
				$service_param = array(
                    'cat_id' => $catid,
                    'username' => $username,
					'productname' => $pname,
					'description' => $pdescr,
					'min_bid_price' => $price,
					'status' => $pstatus,
                    'photo' => $img_name,
					'startdate' => date('Y-m-d',strtotime($startdate)),
					'enddate' => date('Y-m-d',strtotime($enddate)),
					'product_condition' => $pcondition,
					'posting_date' => date('Y-m-d h:i:s'),
					'resprice' => $resprice,
                    );
				$package_id = $this->Product_model->product_insert('product_master', $service_param);
				$this->session->set_flashdata('success', 'Successfully Saved '.$pname.' Product.');
				redirect(base_url('index.php/product/index'));
		}
    }
	
	public function delete_product($id) {
		
        $this->data['product_data'] = $this->Product_model->get_product($id);
		$pname=$this->data['product_data'][0]->productname;
		
		$this->Product_model->product_delete('product_master',$id,'product_id');

		$this->session->set_flashdata('success', 'Successfully Deleted '.$pname.' Product.');
		redirect(base_url('index.php/product/index'));
       
        
    }
	
	public function edit_product($id='') {
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
		
		$this->template->add_css('plugins/select2/select2.css');
		$this->template->add_js('plugins/select2/select2.min.js');
		$this->template->add_js('scripts/product/product_list.js');
		
		$this->template->add_css('plugins/datepicker/jquery.datepick.css');
		$this->template->add_js('plugins/datepicker/jquery.plugin.js');
		$this->template->add_js('plugins/datepicker/jquery.datepick.js');
		
		$this->data['category_data'] = $this->Product_model->get_category_data($id);
		$json_product_category_data = json_encode(array(
            'id' => $this->data['category_data']->cat_id,
            'text' => $this->data['category_data']->cat_name
        ));
		
		$script = "$(document).ready(function (){"
                . "$('#catid').select2('data', $json_product_category_data);"
                . "});";
		
		$this->template->add_js($script, "embed");


		
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
        
        $this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'productname',
						 'label'   => 'Product Name',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'catid',
						 'label'   => 'Category',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'startdate',
						 'label'   => 'Start Date',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'enddate',
						 'label'   => 'End Date',
						 'rules'   => 'required'
					  ),
                   array(
						 'field'   => 'bidprice',
						 'label'   => 'Bidding Price',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'resprice',
						 'label'   => 'Reserved Price',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'productname'  => array( 'required'    => "Product Name is required"),
                         'catid'  => array( 'required'    => "Category is required"),
						 'startdate'  => array( 'required'    => "Start Date is required"),
						 'enddate'  => array( 'required'    => "End Date is required"),
						 'bidprice'  => array( 'required'    => "Bidding Price is required"),
						 'resprice'  => array( 'required'    => "Reserved Price is required")
                         );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
        
        $this->data['title'] = "List";
        $this->data['page_title'] = "Product";
        $this->data['active_tab'] = "product";
        $this->data['page_content'] = "product/edit";
        
        $this->data['validation_script']=$this->jquery_validation->run('#product_form');
		if($id!='')
			$this->data['productdata'] = $this->Product_model->get_product($id);
		 
		$this->form_validation->set_rules('productname', 'Product Name', 'trim|required');
		$this->form_validation->set_rules('catid', 'Category', 'trim|required');
		$this->form_validation->set_rules('startdate', 'Start Date', 'trim|required');
		$this->form_validation->set_rules('enddate', 'End Date', 'trim|required');
        $this->form_validation->set_rules('bidprice', 'Bidding Price', 'trim|required');
        $this->form_validation->set_rules('resprice', 'Reserved Price', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            $this->load->view('template', $this->data);
        } else {
				$pid = $this->input->post('productid');
                $pname = $this->input->post('productname');
				$catid = $this->input->post('catid');
				$startdate = $this->input->post('startdate')." ".date('H:i:s');
				$enddate = $this->input->post('enddate')." ".date('H:i:s');
				$pdescr = $this->input->post('pdescr');
				$pstatus = $this->input->post('astatus');
				$pcondition = $this->input->post('pcondition');
                $price = $this->input->post('bidprice');
				$resprice = $this->input->post('resprice');
				$username = $this->session->userdata('username');
                $img_name = $this->input->post('productfile');
                $img_exist_name = $this->input->post('photo_name');
        
                //$path= base_url('assets/uploads/' . $img_exist_name);
			
				
				//Transfering data to Model
				if($img_exist_name!="")
				{
					$path= base_url('./assets/uploads/' . $img_exist_name);
					if(file_get_contents($path))
					{
						$img_name=$img_exist_name;
						$service_param = array(
							'cat_id' => $catid,
							'username' => $username,
							'productname' => $pname,
							'description' => $pdescr,
							'min_bid_price' => $price,
							'status' => $pstatus,
							'photo' => $img_name,
							'startdate' => date('Y-m-d',strtotime($startdate)),
							'enddate' => date('Y-m-d',strtotime($enddate)),
							'product_condition' => $pcondition,
							'posting_date' => date('Y-m-d h:i:s'),
							'resprice' => $resprice,
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
						
						$service_param = array(
							'cat_id' => $catid,
							'username' => $username,
							'productname' => $pname,
							'description' => $pdescr,
							'min_bid_price' => $price,
							'status' => $pstatus,
							'photo' => $img_name,
							'startdate' => date('Y-m-d',strtotime($startdate)),
							'enddate' => date('Y-m-d',strtotime($enddate)),
							'product_condition' => $pcondition,
							'posting_date' => date('Y-m-d h:i:s'),
							'resprice' => $resprice,
						);
						
                    }
                    else
                    {
                        $service_param = array(
							'cat_id' => $catid,
							'username' => $username,
							'productname' => $pname,
							'description' => $pdescr,
							'min_bid_price' => $price,
							'status' => $pstatus,
							'photo' => $img_name,
							'startdate' => date('Y-m-d',strtotime($startdate)),
							'enddate' => date('Y-m-d',strtotime($enddate)),
							'product_condition' => $pcondition,
							'posting_date' => date('Y-m-d h:i:s'),
							'resprice' => $resprice,
						);
                    }
				}   
                   
					$product_id = $this->Product_model->product_update('product_master', $service_param,$pid,'product_id');
					$this->session->set_flashdata('success', 'Successfully Modified '.$pname.' Product.');
                    
				
				
				redirect(base_url('index.php/product/index'));
		}
    }
	
	public function view_product($id='') {
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
		
		$this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
        
        
        
        $this->data['title'] = "List";
        $this->data['page_title'] = "Product";
        $this->data['active_tab'] = "product";
        $this->data['page_content'] = "product/view";
        
        
		
		$this->data['productdata'] = $this->Product_model->get_product($id);
		$this->load->view('template', $this->data); 
		
		
    }
	
	public function view_product_bidding() {
		if (!$this->input->is_ajax_request()) {
            exit('No direct script access allowed');
        } else {
			$pid = $this->input->post("productid");
			$ret = $this->Product_model->get_product_history($pid);
			echo json_encode($ret);
		}
    }
}
