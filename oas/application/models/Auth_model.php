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
class Auth_model extends CI_Model {

    function register_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }
	
	function check_user($emailid, $username) {
		$this->db->limit(1);
		$where = 'Type="User" AND (Username="'.$username.'" or Email = "'.$emailid.'")';
		$this->db->where($where);
        $query = $this->db->get('user_master');

        if ($query->num_rows() == 1) {
            return false;
        } else {
            return true;
        }
    }
	
	function login($username, $password) {

        $this->db->limit(1);
        $query = $this->db->get_where('user_master',array("Type"=>"User","Username"=>$username,"Password"=>$password));

        if ($query->num_rows() == 1) {
            return $query->result();
        } else {
            return false;
        }
    }
	
	function retriveLoginData($email) {
		$this->db->limit(1);
        $this->db->where('Email', $email);
		$this->db->where('Type', 'User');
        $query = $this->db->get('user_master');

        if ($query->num_rows() == 1) {
            return $query->result();
        } else {
            return false;
        }
    }

}