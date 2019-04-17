 //Validation
 validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }
    if (!this.state.email) {
      emailError = "Please Enter  email";
    }
    if (!this.state.password) {
      passwordError = "Enter Password";
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  };
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
      console.log("props", this.props.loginUser(user));
      this.props.history.push("/homepage");
      // login(user).then(res => {
      //   if (res) {
      //     console.log("res");
      //     this.props.history.push("/homepage");
      //   }
      //   if (!res) {
      //     this.setState({ passwordError: "Invalid Password" });
      //     return false;
      //   }
      // });
    }
  }
  componentDidMount() {
    document.title = "Login";
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }