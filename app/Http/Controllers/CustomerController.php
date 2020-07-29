<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Http\Requests\CreateCustomerRequest;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
   function all()
	{
		$customers = Customer::orderBy('created_at', 'desc')->get();

		return response()->json([
			"customers" => $customers
		], 200);
	}

	function get($id)
	{
		$customer = Customer::where('id', $id)->first();

		return response()->json([
			"customer" => $customer
		], 200);
	}

	function new(CreateCustomerRequest $request)
	{
		$customer = Customer::create($request->only(["name", "email", "phone", "website"]));

		return response()->json([
			"customer" => $customer
		], 200);
	}
}
