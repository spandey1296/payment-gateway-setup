--
-- Table structure for table `cp_user_bank_testing`
--

CREATE TABLE `cp_user_bank_testing` (
  `id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `account_number` int(16) DEFAULT NULL,
  `bank_name` varchar(50) CHARACTER SET utf16 DEFAULT NULL,
  `ifsc_code` varchar(30) CHARACTER SET utf16 DEFAULT NULL,
  `upi_number` varchar(30) CHARACTER SET utf16 DEFAULT NULL,
  `primary_bank` tinyint(1) DEFAULT 1,
  `linux_added_on` int(11) NOT NULL,
  `linux_modified_on` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



curl --location 'localhost:3000/api/v1/payment/user/add/paymentdetails' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userId": 22,
    "type": "upi",
    "upiNumber": "7277921877@ybl"
    
}'



curl --location --request PUT 'localhost:3000/api/v1/payment/user/update/paymentdetails' \
--header 'Content-Type: application/json' \
--data '{
    "id":7,
    "userId":15
}'


curl --location 'localhost:3000/api/v1/payment/user/list/paymentdetails?userId=15'





{
    "code": 200,
    "data": "",
    "message": [
        {
            "id": 4,
            "user_id": 15,
            "type": "upi",
            "account_number": 2334,
            "bank_name": null,
            "ifsc_code": null,
            "upi_number": null,
            "primary_bank": 0,
            "linux_added_on": 1679747661,
            "linux_modified_on": 1679747661
        },
        {
            "id": 5,
            "user_id": 15,
            "type": "upi",
            "account_number": 123,
            "bank_name": null,
            "ifsc_code": null,
            "upi_number": null,
            "primary_bank": 0,
            "linux_added_on": 1679747947,
            "linux_modified_on": 1679747947
        },
        {
            "id": 6,
            "user_id": 15,
            "type": "upi",
            "account_number": 123,
            "bank_name": null,
            "ifsc_code": null,
            "upi_number": null,
            "primary_bank": 0,
            "linux_added_on": 1679748092,
            "linux_modified_on": 1679748092
        },
        {
            "id": 7,
            "user_id": 15,
            "type": "bank",
            "account_number": 2147483647,
            "bank_name": "STATE BANK OF INDIA",
            "ifsc_code": "SBI4677IN",
            "upi_number": null,
            "primary_bank": 0,
            "linux_added_on": 1679748322,
            "linux_modified_on": 1679748322
        },
        {
            "id": 8,
            "user_id": 17,
            "type": "upi",
            "account_number": 2147483647,
            "bank_name": null,
            "ifsc_code": null,
            "upi_number": null,
            "primary_bank": 0,
            "linux_added_on": 1679748923,
            "linux_modified_on": 1679748923
        },
        {
            "id": 9,
            "user_id": 17,
            "type": "upi",
            "account_number": 2147483647,
            "bank_name": "STATE BANK OF INDIA",
            "ifsc_code": "SBI4677IN",
            "upi_number": null,
            "primary_bank": 0,
            "linux_added_on": 1679748925,
            "linux_modified_on": 1679748925
        },
        {
            "id": 10,
            "user_id": 19,
            "type": "upi",
            "account_number": 2147483647,
            "bank_name": null,
            "ifsc_code": null,
            "upi_number": null,
            "primary_bank": 1,
            "linux_added_on": 1679749164,
            "linux_modified_on": 1679749164
        },
        {
            "id": 11,
            "user_id": 19,
            "type": "upi",
            "account_number": null,
            "bank_name": null,
            "ifsc_code": null,
            "upi_number": null,
            "primary_bank": 1,
            "linux_added_on": 1679749167,
            "linux_modified_on": 1679749167
        },
        {
            "id": 12,
            "user_id": 15,
            "type": "upi",
            "account_number": 2147483647,
            "bank_name": null,
            "ifsc_code": null,
            "upi_number": null,
            "primary_bank": 0,
            "linux_added_on": 1679749939,
            "linux_modified_on": 1679749939
        },
        {
            "id": 13,
            "user_id": 15,
            "type": "upi",
            "account_number": 2147483647,
            "bank_name": "",
            "ifsc_code": "",
            "upi_number": "",
            "primary_bank": 1,
            "linux_added_on": 1679755212,
            "linux_modified_on": 1679755212
        },
        {
            "id": 14,
            "user_id": 17,
            "type": "upi",
            "account_number": 0,
            "bank_name": "",
            "ifsc_code": "",
            "upi_number": "7277921877@ybl",
            "primary_bank": 1,
            "linux_added_on": 1679755373,
            "linux_modified_on": 1679755373
        },
        {
            "id": 15,
            "user_id": 21,
            "type": "upi",
            "account_number": null,
            "bank_name": "",
            "ifsc_code": "",
            "upi_number": "7277921877@ybl",
            "primary_bank": 1,
            "linux_added_on": 1679755524,
            "linux_modified_on": 1679755524
        },
        {
            "id": 16,
            "user_id": 22,
            "type": "upi",
            "account_number": null,
            "bank_name": "",
            "ifsc_code": "",
            "upi_number": "7277921877@ybl",
            "primary_bank": 1,
            "linux_added_on": 1679755555,
            "linux_modified_on": 1679755555
        }
    ]
}











