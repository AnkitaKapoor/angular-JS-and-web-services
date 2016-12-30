/*
 * Name:         Ankita KAPOOR
 * Student ID:   18358877
 * User name:    18358877
 * Subject Code: CSE4OAD
*/

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import com.google.gson.Gson;

public class RecipeWS extends HttpServlet
{
	RecipeDSC recipeDSC = new RecipeDSC();

	/*	To get one recipe (by id) or all recipes
	*/
	public void doGet(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
		try
		 {
			 // Get id
			 String id = request.getParameter("id");
			 //System.out.println(">>> id: " + id);

		 // Get method is used to find one recipe or all recipes
		 if (id != null) // to find one recipe
		 {
			 Recipe recipe = new RecipeDSC().find(Integer.parseInt(id));

			 response.setContentType("application/json");
			 PrintWriter out = response.getWriter();
			 out.print( (new Gson()). toJson(recipe));
		 }
	
		else
		 // Get method to get all recipes
		 {
			 List<Recipe> list = new RecipeDSC().findAll();
			 response.setContentType("application/json");
			 PrintWriter out = response.getWriter();
			 out.print( (new Gson()). toJson(list));
		 }
		 		
				}
		 catch(Exception e)
		 {
		 throw new RuntimeException(e.getMessage());
		 }

	}

	/*	To add a recipe
	*/
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
		try
		 {
			 // Get data
			 BufferedReader in = request.getReader();
			 StringBuffer dataSB = new StringBuffer();
			 String line = in.readLine();
			 while(line != null)
			 {
				 dataSB.append(line).append("\n");
				 line = in.readLine();
			 }
			 String data = dataSB.toString();
			// System.out.println(">>> data:\n*" + data +"*");

			 // Convert Json to Product
			 Recipe recipe = (new Gson()). fromJson(data, Recipe.class);

			 new RecipeDSC().add(recipe);
			 response.setContentType("application/json");
			 PrintWriter out = response.getWriter();
			 out.print(data);
		 }
		 catch(Exception e)
		 {
		 	response.getWriter().print(e.getMessage());
		 }
	}

	/*	To upadate a recipe
	*/
	public void doPut(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
	try
		 {
			 // Get id
			// String id = request.getParameter("id");
			// System.out.println(">>> id: " + id);
					
			// Get data
			 BufferedReader in = request.getReader();
			 StringBuffer dataSB = new StringBuffer();
			 String line = in.readLine();
				 while(line != null)
				 {
				 dataSB.append(line).append("\n");
				 line = in.readLine();
				 }
			 String data = dataSB.toString();
			// System.out.println(">>> data:\n*" + data +"*");

			 // Convert Json to Product
			  Recipe recipe = (new Gson()). fromJson(data, Recipe.class);

			  new RecipeDSC().update(recipe);

			 response.setContentType("application/json");
			 PrintWriter out = response.getWriter();
			 out.print(data);
		 }
		 catch(Exception e)
		 {
		 throw new RuntimeException(e.getMessage());
		 }

	}// doPut


	// To delete a product
	//
	public void doDelete(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
	try
	{
	// Get id
	 String id = request.getParameter("id");
	 // This doDelete method is called when we have a DELETE request
	 new RecipeDSC().delete(Integer.parseInt(id));
	 response.setContentType("application/json");
	}
	catch(Exception e)
	 {
	 throw new RuntimeException(e.getMessage());
	 }
	}
}

