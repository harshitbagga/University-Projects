<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Product extends CI_Controller {

    function __construct() {
        parent::__construct();
		$this->load->model('Home_model', '', TRUE);
	}
	
	public function productlist($id) {


        $this->data['title'] = "Product List";
        $this->data['page_title'] = "Products";
        $this->data['active_tab'] = "product";
        $this->data['page_content'] = "product/index";

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
		$this->data['categorylist'] = $this->Home_model->get_category($id);
		$this->data['productlist'] = $this->Home_model->get_product($id);

        $this->load->view('template', $this->data);
    }
	
	public function productdetail($id) {


        $this->data['title'] = "Product List";
        $this->data['page_title'] = "Products";
        $this->data['active_tab'] = "product";
        $this->data['page_content'] = "product/productdetail";

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
		
		$this->data['productdetail'] = $this->Home_model->get_productdetail($id);

        $this->load->view('template', $this->data);
    }
	
	public function validateexpiry($pid) {
		$service_param = array(
							'status' => 0,
						);
		$product_id = $this->Home_model->product_update('product_master', $service_param,$pid,'product_id');
		return true;
	}
	
	public function applybid()
	{
		if($this->session->userdata('loginname')!="")
		{
			$uname=$this->session->userdata('loginname');
			$amount=str_replace(',','',$this->input->post('bid_amount'));
			$productid=$this->input->post('hidden_product_id');
			$bid=1;
			$service_param = array(
							'product_id' => $productid,
							'username' => $uname,
							'bid_date' => date('Y-m-d h:i:s'),
							'bid_price' => $amount,
						);
			$product_id = $this->Home_model->bid_insert('bid_master', $service_param);
			$this->data['userinfo']=$this->Home_model->get_user($this->session->userdata('loginname'));
			$totalBid=$this->data['userinfo'][0]->balance_bid;
			$totalBid=$totalBid-$bid;
			
			$service_param2 = array(
				'balance_bid' => $totalBid
			);
			$this->Home_model->updateProfile('user_master', $service_param2,$uname,'Username');
			$this->session->set_userdata('UserBid', $totalBid);
			redirect(base_url('index.php/myaccount/index'));
		}
		else
			redirect(base_url('index.php/auth/login'));
	}
	
}
