<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Class User_model extends CI_Model {

    function login($username, $password) {

        $this->db->limit(1);
        $query = $this->db->get_where('user_master',array("Type"=>"Admin","Username"=>$username,"Password"=>$password));

        if ($query->num_rows() == 1) {
            return $query->result();
        } else {
            return false;
        }
    }
	
	function retriveLoginData($email) {

        $this->db->where('Email', $email);
        $query = $this->db->get('user_master');

        if ($query->num_rows() == 1) {
            return $query->result();
        } else {
            return false;
        }
    }
	
	function checkPassword($uname,$opwd) {

        $this->db->where('Username', $uname);
		$this->db->where('Password', $opwd);
		$this->db->where('Type', 'Admin');
		$this->db->limit(1);
        $query = $this->db->get('user_master');
        return $query->num_rows();
        
    }
	
	function updatePassword($table_name, $param, $id, $field) {

        $this->db->where($field, $id);
        $this->db->update($table_name, $param);
        
    }
	
	function get_user() {
		$query = $this->db->query("SELECT user_master.*,country_master.country_name,state_master.state_name,city_master.city_name FROM user_master 
INNER JOIN country_master ON country_master.country_id=user_master.country_id
INNER JOIN state_master ON state_master.state_id=user_master.state_id
INNER JOIN city_master ON city_master.city_id=user_master.city_id
WHERE Type='User'");
		return $query->result();
	 }
	
	function get_product() {

        $result = $this->db->get("product_master")->result();
	    return $result;
    }
	
	function get_inquiry() {

        $result = $this->db->get("feedback_master")->result();
	    return $result;
    }
	
	function get_package() {

        $result = $this->db->get("package_master")->result();
	    return $result;
    }

}
