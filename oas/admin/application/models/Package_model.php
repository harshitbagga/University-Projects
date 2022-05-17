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
class Package_model extends CI_Model {

    
	function get_package($id='') {
		if($id==""){
			$result = $this->db->get("package_master")->result();
			return $result;
		}
		else{
			$result = $this->db->get_where("package_master",array("package_id"=>$id))->result();
			return $result;
		}
    }
	
	function package_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }
	
	function package_update($table_name, $param, $id, $field) {
		$this->db->where($field, $id);
        $this->db->update($table_name, $param);
    }
	
	function package_delete($table_name, $id, $field) {
		$this->db->where($field, $id);
        $this->db->delete($table_name);
    }
	
	function package_exist($keyword_name) {
        $this->db->where("pname", $keyword_name);
        $result = $this->db->get("package_master")->result();
        return $result;
    }
	
	function search_package($keyword_name) {
        $this->db->like("pname", $keyword_name);
        $result = $this->db->get("package_master")->result();
        return $result;
    }
	
}