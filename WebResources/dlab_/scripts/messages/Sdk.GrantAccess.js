// =====================================================================
//  This file is part of the Microsoft Dynamics CRM SDK code samples.
//
//  Copyright (C) Microsoft Corporation.  All rights reserved.
//
//  This source code is intended only as a supplement to Microsoft
//  Development Tools and/or on-line documentation.  See these other
//  materials for detailed information regarding Microsoft code samples.
//
//  THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
//  KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
//  IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
//  PARTICULAR PURPOSE.
// =====================================================================
"use strict";
(function ()
{
 this.GrantAccessRequest = function (target, principalAccess) {
  ///<summary>
  /// Contains the data that is needed to grant a security principal (user or team) access to the specified record.
  ///</summary>
  ///<param name="target"  type="Sdk.EntityReference">
  /// Sets the entity that is the target of the request to grant access. Required.
  ///</param>
  ///<param name="principalAccess"  type="Sdk.PrincipalAccess">
  /// Sets the team or user that is granted access to the specified record. Required.
  ///</param>
  if (!(this instanceof Sdk.GrantAccessRequest)) {
   return new Sdk.GrantAccessRequest(target, principalAccess);
  }
  Sdk.OrganizationRequest.call(this);

  // Internal properties
  var _target = null;
  var _principalAccess = null;

  // internal validation functions

  function _setValidTarget(value) {
   if (value instanceof Sdk.EntityReference) {
    _target = value;
   }
   else {
    throw new Error("Sdk.GrantAccessRequest Target property is required and must be a Sdk.EntityReference.")
   }
  }

  function _setValidPrincipalAccess(value) {
   if (value instanceof Sdk.PrincipalAccess) {
    _principalAccess = value;
   }
   else {
    throw new Error("Sdk.GrantAccessRequest PrincipalAccess property is required and must be a Sdk.PrincipalAccess.")
   }
  }

  //Set internal properties from constructor parameters
  if (typeof target != "undefined") {
   _setValidTarget(target);
  }
  if (typeof principalAccess != "undefined") {
   _setValidPrincipalAccess(principalAccess);
  }

  function getRequestXml() {
   return ["<d:request>",
           "<a:Parameters>",

             "<a:KeyValuePairOfstringanyType>",
               "<b:key>Target</b:key>",
              (_target == null) ? "<b:value i:nil=\"true\" />" :
              ["<b:value i:type=\"a:EntityReference\">", _target.toValueXml(), "</b:value>"].join(""),
             "</a:KeyValuePairOfstringanyType>",

             "<a:KeyValuePairOfstringanyType>",
               "<b:key>PrincipalAccess</b:key>",
              (_principalAccess == null) ? "<b:value i:nil=\"true\" />" :
              ["<b:value i:type=\"g:PrincipalAccess\">", _principalAccess.toValueXml(), "</b:value>"].join(""),
             "</a:KeyValuePairOfstringanyType>",

           "</a:Parameters>",
           "<a:RequestId i:nil=\"true\" />",
           "<a:RequestName>GrantAccess</a:RequestName>",
         "</d:request>"].join("");
  }

  this.setResponseType(Sdk.GrantAccessResponse);
  this.setRequestXml(getRequestXml());

  // Public methods to set properties
  this.setTarget = function (value) {
   ///<summary>
   /// Sets the entity that is the target of the request to grant access. Required.
   ///</summary>
   ///<param name="value" type="Sdk.EntityReference">
   /// The entity that is the target of the request to grant access.
   ///</param>
   _setValidTarget(value);
   this.setRequestXml(getRequestXml());
  }

  this.setPrincipalAccess = function (value) {
   ///<summary>
   /// Sets the team or user that is granted access to the specified record. Required.
   ///</summary>
   ///<param name="value" type="Sdk.PrincipalAccess">
   /// The team or user that is granted access to the specified record.
   ///</param>
   _setValidPrincipalAccess(value);
   this.setRequestXml(getRequestXml());
  }

 }
 this.GrantAccessRequest.__class = true;

 this.GrantAccessResponse = function (responseXml) {
  ///<summary>
  /// Response to GrantAccessRequest
  ///</summary>
  if (!(this instanceof Sdk.GrantAccessResponse)) {
   return new Sdk.GrantAccessResponse(responseXml);
  }
  Sdk.OrganizationResponse.call(this)

  // This message returns no values






 }
 this.GrantAccessResponse.__class = true;
}).call(Sdk)

Sdk.GrantAccessRequest.prototype = new Sdk.OrganizationRequest();
Sdk.GrantAccessResponse.prototype = new Sdk.OrganizationResponse();
