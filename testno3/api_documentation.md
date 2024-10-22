# API Documentation

## Product API

### 1. Create Product

- **Endpoint:** `POST /products`
- **Description:** Create a new product.
- **Request Body:**
  ```json
  {
    "name": "string",
    "desc": "string",
    "category_id": "integer",
    "image": "file" // (multipart/form-data)
  }
  ```
- **Responses:**
  - **201 Created**
    ```json
    {
      "message": "New Product Created",
      "data": {
        "id": "integer",
        "name": "string",
        "desc": "string",
        "image": "string",
        "category_id": "integer"
      }
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "error": {
        "name": "EmptyInput",
        "message": "Validation error"
      }
    }
    ```

### 2. Get All Products

- **Endpoint:** `GET /products`
- **Description:** Retrieve a list of all products.
- **Responses:**
  - **200 OK**
    ```json
    [
      {
        "id": "integer",
        "name": "string",
        "desc": "string",
        "image": "string",
        "category_id": "integer"
      },
      ...
    ]
    ```

### 3. Get Product by ID

- **Endpoint:** `GET /products/:id`
- **Description:** Retrieve a product by its ID.
- **Parameters:**
  - `id` (integer) - The ID of the product.
- **Responses:**
  - **200 OK**
    ```json
    {
      "id": "integer",
      "name": "string",
      "desc": "string",
      "image": "string",
      "category_id": "integer"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "error": {
        "name": "NotFound",
        "message": "Data not found"
      }
    }
    ```

### 4. Update Product by ID

- **Endpoint:** `PUT /products/:id`
- **Description:** Update a product by its ID.
- **Parameters:**
  - `id` (integer) - The ID of the product.
- **Request Body:**
  ```json
  {
    "name": "string",
    "desc": "string",
    "category_id": "integer"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "Successfully updated product with id {id}",
      "data": {
        "id": "integer",
        "name": "string",
        "desc": "string",
        "image": "string",
        "category_id": "integer"
      }
    }
    ```
  - **404 Not Found**
    ```json
    {
      "error": {
        "name": "NotFound",
        "message": "Data not found"
      }
    }
    ```

### 5. Delete Product by ID

- **Endpoint:** `DELETE /products/:id`
- **Description:** Delete a product by its ID.
- **Parameters:**
  - `id` (integer) - The ID of the product.
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "{product name} successfully deleted",
      "data": {
        "id": "integer",
        "name": "string",
        "desc": "string",
        "image": "string",
        "category_id": "integer"
      }
    }
    ```
  - **404 Not Found**
    ```json
    {
      "error": {
        "name": "NotFound",
        "message": "Data not found"
      }
    }
    ```

### 6. Patch Product By Id

- **Endpoint:** `PATCH /products/:id`
- **Description:** Updates the image of a product identified by its ID.
- **Path Parameter**

  - `id` (string): The ID of the product to update.

- **Request Body:**
- **Form Data**
  - `image` (file): The new image file to upload for the product. This should be included as multipart/form-data.
- **Responses:**
- **200 OK**

  - **Content**:
    ```json
    {
      "message": "Image {product_name} success to update"
    }
    ```
  - **Description**: The image for the specified product has been successfully updated.

- **404 Not Found**

  - **Content**:
    ```json
    {
      "name": "NotFound",
      "message": "Data not found"
    }
    ```

- **400 Bad Request**
  - **Content**:
    ```json
    {
      "name": "FileRequired",
      "message": "Validation error"
    }
    ```

## Category API

### 1. Create Category

- **Endpoint:** `POST /categories`
- **Description:** Create a new category.
- **Request Body:**
  ```json
  {
    "name": "string"
  }
  ```
- **Responses:**
  - **201 Created**
    ```json
    {
      "message": "New Category Created",
      "data": {
        "id": "integer",
        "name": "string"
      }
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "error": {
        "name": "InvalidInput",
        "message": "Invalid input data."
      }
    }
    ```

### 2. Get All Categories

- **Endpoint:** `GET /categories`
- **Description:** Retrieve a list of all categories.
- **Responses:**
  - **200 OK**
    ```json
    [
      {
        "id": "integer",
        "name": "string"
      },
      ...
    ]
    ```

### 3. Get Category by ID

- **Endpoint:** `GET /categories/:id`
- **Description:** Retrieve a category by its ID.
- **Parameters:**
  - `id` (integer) - The ID of the category.
- **Responses:**
  - **200 OK**
    ```json
    {
      "id": "integer",
      "name": "string"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "error": {
        "name": "NotFound",
        "message": "Data not found"
      }
    }
    ```

### 4. Update Category by ID

- **Endpoint:** `PUT /categories/:id`
- **Description:** Update a category by its ID.
- **Parameters:**
  - `id` (integer) - The ID of the category.
- **Request Body:**
  ```json
  {
    "name": "string"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "success update id {id}",
      "data": {
        "id": "integer",
        "name": "string"
      }
    }
    ```
  - **404 Not Found**
    ```json
    {
      "error": {
        "name": "NotFound",
        "message": "Data not found"
      }
    }
    ```

### 5. Delete Category by ID

- **Endpoint:** `DELETE /categories/:id`
- **Description:** Delete a category by its ID.
- **Parameters:**
  - `id` (integer) - The ID of the category.
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "{category name} success to delete",
      "data": {
        "id": "integer",
        "name": "string"
      }
    }
    ```
  - **404 Not Found**
    ```json
    {
      "error": {
        "name": "NotFound",
        "message": "Data not found"
      }
    }
    ```
