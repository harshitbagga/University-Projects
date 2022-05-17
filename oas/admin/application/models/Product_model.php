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
class Product_model extends CI_Model {

    
	function get_product($id='') {
		if($id==""){
			$query = $this->db->query("SELECT product_master.*,category_master.cat_name FROM product_master 
INNER JOIN category_master ON category_master.cat_id=product_master.cat_id
ORDER BY product_master.productname");
		}
		else{
			$query = $this->db->query("SELECT product_master.*,category_master.cat_name FROM product_master 
INNER JOIN category_master ON category_master.cat_id=product_master.cat_id
WHERE product_master.product_id=".$id."
ORDER BY product_master.productname");
		}
		return $query->result();
    }
	
	function get_product_history($id) {
		$query = $this->db->query("SELECT * FROM bid_master 
WHERE bid_master.product_id=".$id."
ORDER BY bid_master.bid_id");
		return $query->result();
    }
	
	function product_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }
	
	function product_update($table_name, $param, $id, $field) {
		$this->db->where($field, $id);
        $this->db->update($table_name, $param);
    }
	
	function product_delete($table_name, $id, $field) {
		$this->db->where($field, $id);
        $this->db->delete($table_name);
    }
	
	function product_exist($keyword_name) {
        $this->db->where("productname", $keyword_name);
        $result = $this->db->get("product_master")->result();
        return $result;
    }
	
	function search_product($keyword_name) {
        $this->db->like("productname", $keyword_name);
        $result = $this->db->get("product_master")->result();
        return $result;
    }
	
	function get_category_data($id) {
		$this->db->select('category_master.cat_id, category_master.cat_name');
        $this->db->join('category_master', 'category_master.cat_id = product_master.cat_id','left');
        $query = $this->db->get_where('product_master', array('product_id' => $id));
        return $query->first_row();
    }

	
}