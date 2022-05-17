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
class Payment_model extends CI_Model {

    function package_user_purchase_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
    }
	
	function payment_insert($table_name, $param) {
		$this->db->insert($table_name, $param);
     }
	
}