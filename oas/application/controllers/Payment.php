<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Payment extends CI_Controller {

    function __construct() {
        parent::__construct();
		$this->load->model('Payment_model', '', TRUE);
		$this->load->model('Home_model', '', TRUE);
	}
	
	public function sucess($packageId,$Amount,$Bid) {

		if($this->session->userdata('loginname')!="")
		{
			$this->data['title'] = "Sucess";
			$this->data['page_title'] = "Sucess";
			$this->data['active_tab'] = "myaccount";
			$this->data['page_content'] = "myaccount/sucess";
	
			//page level css
			$this->template->add_css('css/bootstrap.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/core.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/style_childtheme.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/style.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
	
			//page level plugin
			$this->template->add_js('js/jquery.js?ver=1.12.4');
			$this->template->add_js('js/jquery-migrate.min.js?ver=1.4.1');
		   
			
			$this->template->add_js('js/core.min.js?ver=1.11.4');
			$this->template->add_js('js/widget.min.js?ver=1.11.4');
			$this->template->add_js('js/mouse.min.js?ver=1.11.4');
			$this->template->add_js('js/draggable.min.js?ver=1.11.4');
			$this->template->add_js('js/wp-embed.min.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_js('js/core.ajax.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_js('js/core.jquery.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			
			$this->data['js'] = $this->template->js;
			$this->data['css'] = $this->template->css;
			
			$packageId_Id=$packageId;
			$packageId_Amount=$Amount;
			$package_Bid=$Bid;
			$uname=$this->session->userdata('loginname');
			
			$this->data['userinfo']=$this->Home_model->get_user($this->session->userdata('loginname'));
			$totalBid=$this->data['userinfo'][0]->balance_bid;
			$totalBid=$totalBid+$package_Bid;
			$service_param = array(
			'username' => $uname,
			'total_package_bid' => $package_Bid,
			'purchase_date' => date('Y-m-d h:i:s'),
			'package_id' => $packageId_Id,
			);
			
			$service_param1 = array(
			'username' => $uname,
			'package_id' => $packageId_Id,
			'amount' => $packageId_Amount,
			'status' => 1,
			'payment_date' => date('Y-m-d h:i:s'),
			);
			
			$service_param2 = array(
				'balance_bid' => $totalBid
			);
			
			$this->Payment_model->package_user_purchase_insert('package_user_master', $service_param);
			$this->Payment_model->payment_insert('payment_master', $service_param1);
			$this->Home_model->updateProfile('user_master', $service_param2,$uname,'Username');
			
			$this->session->set_userdata('UserBid', $totalBid);
			
			
			$this->load->view('template', $this->data);
		}
		else
			redirect(base_url('index.php/auth/login'));
    }
	
	public function cancel() {

		if($this->session->userdata('loginname')!="")
		{
			$this->data['title'] = "Cancel";
			$this->data['page_title'] = "Cancel";
			$this->data['active_tab'] = "myaccount";
			$this->data['page_content'] = "myaccount/cancel";
	
			//page level css
			$this->template->add_css('css/bootstrap.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/core.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/style_childtheme.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/style.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
	
			//page level plugin
			$this->template->add_js('js/jquery.js?ver=1.12.4');
			$this->template->add_js('js/jquery-migrate.min.js?ver=1.4.1');
		   
			
			$this->template->add_js('js/core.min.js?ver=1.11.4');
			$this->template->add_js('js/widget.min.js?ver=1.11.4');
			$this->template->add_js('js/mouse.min.js?ver=1.11.4');
			$this->template->add_js('js/draggable.min.js?ver=1.11.4');
			$this->template->add_js('js/wp-embed.min.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_js('js/core.ajax.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_js('js/core.jquery.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			
			$this->data['js'] = $this->template->js;
			$this->data['css'] = $this->template->css;
			
			
			
			$this->load->view('template', $this->data);
		}
		else
			redirect(base_url('index.php/auth/login'));
    }
	
}
