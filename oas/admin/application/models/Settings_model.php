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
class Settings_model extends CI_Model {

    
	function get_country($id='') {
		if($id==""){
			$result = $this->db->get("country_master")->result();
			return $result;
		}
		else{
			$result = $this->db->get_where("country_master",array("country_id"=>$id))->result();
			return $result;
		}
    }
	
	function country_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }
	
	function country_update($table_name, $param, $id, $field) {
		$this->db->where($field, $id);
        $this->db->update($table_name, $param);
    }
	
	function country_delete($table_name, $id, $field) {
		$this->db->where($field, $id);
        $this->db->delete($table_name);
    }
	
	function country_exist($keyword_name) {
        $this->db->where("country_name", $keyword_name);
        $result = $this->db->get("country_master")->result();
        return $result;
    }
	
	function search_country($keyword_name) {
        $this->db->like("country_name", $keyword_name);
        $result = $this->db->get("country_master")->result();
        return $result;
    }
	
	function get_state($id='') {
		if($id==''){
			$query = $this->db->query("SELECT state_master.*,country_master.country_name FROM state_master 
INNER JOIN country_master ON country_master.country_id=state_master.country_id
ORDER BY state_master.state_id");
		}else{
			$query = $this->db->query("SELECT state_master.*,country_master.country_name FROM state_master 
INNER JOIN country_master ON country_master.country_id=state_master.country_id
WHERE state_master.state_id=".$id."
ORDER BY state_master.state_id");
		}		
        return $query->result();
    }
	
	function state_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }
	
	function state_update($table_name, $param, $id, $field) {
		$this->db->where($field, $id);
        $this->db->update($table_name, $param);
    }
	
	function state_delete($table_name, $id, $field) {
		$this->db->where($field, $id);
        $this->db->delete($table_name);
    }
	
	function state_exist($keyword_name,$id) {
        $this->db->where("state_name", $keyword_name);
		$this->db->where("country_id", $id);
        $result = $this->db->get("state_master")->result();
        return $result;
    }
	
	function search_state($keyword_name) {
        $this->db->like("state_name", $keyword_name);
        $result = $this->db->get("state_master")->result();
        return $result;
    }
	
	function get_city($id='') {
		if($id==''){
			$query = $this->db->query("SELECT city_master.*,country_master.country_name,state_master.state_name FROM city_master 
INNER JOIN country_master ON country_master.country_id=city_master.country_id
INNER JOIN state_master ON state_master.state_id=city_master.state_id
ORDER BY city_master.city_id");
		}else{
			$query = $this->db->query("SELECT city_master.*,country_master.country_name,state_master.state_name FROM city_master 
INNER JOIN country_master ON country_master.country_id=city_master.country_id
INNER JOIN state_master ON state_master.state_id=city_master.state_id
WHERE city_master.city_id=".$id."
ORDER BY city_master.city_id");
		}		
        return $query->result();
    }
	
	function city_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }
	
	function city_update($table_name, $param, $id, $field) {
		$this->db->where($field, $id);
        $this->db->update($table_name, $param);
    }
	
	function city_delete($table_name, $id, $field) {
		$this->db->where($field, $id);
        $this->db->delete($table_name);
    }
	
	function city_exist($keyword_name,$id,$sid) {
        $this->db->where("city_name", $keyword_name);
		$this->db->where("country_id", $id);
		$this->db->where("state_id", $sid);
        $result = $this->db->get("city_master")->result();
        return $result;
    }
	
	function search_city($keyword_name) {
        $this->db->like("city_name", $keyword_name);
        $result = $this->db->get("city_master")->result();
        return $result;
    }
	
	
	function get_category($id='') {
		if($id==""){
			$result = $this->db->get("category_master")->result();
			return $result;
		}
		else{
			$result = $this->db->get_where("category_master",array("cat_id"=>$id))->result();
			return $result;
		}
    }
	
	function category_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }
	
	function category_update($table_name, $param, $id, $field) {
		$this->db->where($field, $id);
        $this->db->update($table_name, $param);
    }
	
	function category_delete($table_name, $id, $field) {
		$this->db->where($field, $id);
        $this->db->delete($table_name);
    }
	
	function category_exist($keyword_name) {
        $this->db->where("cat_name", $keyword_name);
        $result = $this->db->get("category_master")->result();
        return $result;
    }
	
	function get_inquiry() {
		
		$result = $this->db->get("feedback_master")->result();
		return $result;
		
    }
	
}