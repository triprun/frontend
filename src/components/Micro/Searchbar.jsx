import React from "react";

import {
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

// import styled from "styled-components";

export const SearchBar = () => {
  return (
    <Form className="mt-4 mt-md--4 mb-md-4 mb-3">
      <InputGroup className="input-group-rounded input-group-merge">
        <Input
          aria-label="Search"
          className="form-control-rounded form-control-prepended"
          placeholder="Search"
          type="search"
        />
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <span className="fa fa-search" />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};
