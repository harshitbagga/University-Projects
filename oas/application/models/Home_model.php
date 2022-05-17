<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * Ingredient
 *
 * This model represents Service data. It operates the following tables:
 * - Ingredient 
 *
 * @author	Minesh Mamrawala
 */
class Home_model extends CI_Model {

    
	function get_category() {
		$result = $this->db->get("category_master")->result();
		return $result;
	}
	
	function get_product_category()
	{
		$query = $this->db->query("SELECT category_master.*,count(product_master.product_id) As Count_Product FROM category_master
INNER JOIN product_master ON product_master.cat_id=category_master.cat_id");
		return $query->result();
	}
	
	function get_product($id='') {
		if($id==""){
			$query = $this->db->query("SELECT product_master.*,category_master.cat_name,COUNT(bid_master.username) As total_bid,IFNULL(MAX(bid_master.bid_price),0) As bid_price FROM product_master 
INNER JOIN category_master ON category_master.cat_id=product_master.cat_id
LEFT JOIN bid_master ON bid_master.product_id=product_master.product_id
GROUP BY bid_master.product_id
ORDER BY product_master.productname");
		}
		else{
			$query = $this->db->query("SELECT product_master.*,category_master.cat_name,COUNT(bid_master.username) As total_bid,IFNULL(MAX(bid_master.bid_price),0) As bid_price FROM product_master 
INNER JOIN category_master ON category_master.cat_id=product_master.cat_id
LEFT JOIN bid_master ON bid_master.product_id=product_master.product_id
WHERE product_master.cat_id=".$id."
GROUP BY bid_master.product_id
ORDER BY product_master.productname");
		}
		return $query->result();
    }
	
	function product_update($table_name, $param, $id, $field) {
		$this->db->where($field, $id);
        $this->db->update($table_name, $param);
    }
	
	function feedback_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }
	
	function bid_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
     }
	
	function get_productdetail($id) {
		$query = $this->db->query("SELECT product_master.*,category_master.cat_name,COUNT(bid_master.username) As total_bid,IFNULL(MAX(bid_master.bid_price),0) As bid_price,IFNULL(bid_master.username,'') As bidder FROM product_master 
INNER JOIN category_master ON category_master.cat_id=product_master.cat_id
LEFT JOIN bid_master ON bid_master.product_id=product_master.product_id
WHERE product_master.product_id=".$id."
GROUP BY bid_master.product_id
ORDER BY product_master.productname");
		return $query->result();
    }
	
	function get_user_bid_info($uname) {
		$query = $this->db->query("SELECT bid_master.*,product_master.productname,product_master.startdate,product_master.enddate FROM bid_master 
INNER JOIN product_master ON product_master.product_id=bid_master.product_id
WHERE bid_master.username='".$uname."'
ORDER BY bid_master.bid_id");
		
		$query1 = $this->db->query("SELECT IFNULL(MAX(bid_master.bid_price),0) As bid_price,product_master.product_id FROM product_master 
LEFT JOIN bid_master ON bid_master.product_id=product_master.product_id
WHERE bid_master.username<>'".$uname."'
GROUP BY bid_master.product_id
ORDER BY product_master.product_id");
		$result1=$query1->result();
		$bid_array=array();
		$bid_array["bidArray"]=$query->result();
		$bid_array["maxbidArray"]=array();
		if(count($result1)>0)
		{
			foreach($result1 As $row)
			{
				array_push($bid_array["maxbidArray"],array($row->product_id=>array("bid_price"=>$row->bid_price)));
			}
		}
		
		return $bid_array;
    }
	
	function get_package() {
		$query = $this->db->query("SELECT * FROM package_master ORDER BY package_id");
		return $query->result();
    }
	
	function checkPassword($uname,$opwd) {

        $this->db->where('Username', $uname);
		$this->db->where('Password', $opwd);
		$this->db->where('Type', 'User');
		$this->db->limit(1);
        $query = $this->db->get('user_master');
        return $query->num_rows();
        
    }
	
	function updatePassword($table_name, $param, $id, $field) {

        $this->db->where($field, $id);
        $this->db->update($table_name, $param);
        
    }
	
	function get_user($uname) {
		$query = $this->db->query("SELECT user_master.*,country_master.country_code,state_master.state_code,city_master.city_name FROM user_master 
INNER JOIN country_master ON country_master.country_id=user_master.country_id
INNER JOIN state_master ON state_master.state_id=user_master.state_id
INNER JOIN city_master ON city_master.city_id=user_master.city_id
WHERE user_master.Username='".$uname."' AND Type='User'");
		return $query->result();
    }
	
	function get_payment($uname) {
		$query = $this->db->query("SELECT payment_master.*,package_master.pname FROM payment_master 
INNER JOIN package_master ON package_master.package_id=payment_master.package_id
WHERE payment_master.Username='".$uname."' ORDER BY payment_master.payment_date DESC");
		return $query->result();
    }
	
	function get_country() {
		$result = $this->db->get("country_master")->result();
	    return $result;
    }
	
	function get_state($cid='') {
		if($cid=='')
		{
			$result = $this->db->get("state_master")->result();
		}
		else
		{
			$this->db->where('country_id', $cid);
			$result = $this->db->get("state_master")->result();
		}
	    return $result;
    }
	function get_city($sid='') {
		if($sid=='')
		{
			$result = $this->db->get("city_master")->result();
		}
		else
		{
			$this->db->where('state_id', $sid);
			$result = $this->db->get("city_master")->result();
		}
	    return $result;
    }
	
	function updateProfile($table_name, $param, $id, $field) {
		$this->db->where('Type', 'User');
		$this->db->where($field, $id);
        $this->db->update($table_name, $param);
    }
	
}