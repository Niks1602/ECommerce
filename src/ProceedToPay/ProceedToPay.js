import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import ProceedToPayStyle from "./ProceedToPayStyle.css";
import * as RadioGroup from "@radix-ui/react-radio-group";
import InfoPageID from "../InfoPageID/InfoPageID";
import data from "../data";

const Proceedtopay = () => {
  let ID = 1;
  if(InfoPageID[0] != "0"){
    ID = Number(InfoPageID[0]) - 1;
  }
  
  console.log(ID)
  let price = data[ID].price;
  let deliveryCharge = (data[ID].price < 1000)? 40: 0;
  let total = price + deliveryCharge

  const [debitCardInfo, dispalyDebitCardInfo] = useState("block");
  const [netBankingInfo, dispalyNetBanking] = useState("none");
  const [upiInfo, dispalyUpiInfo] = useState("none");
  const [emiInfo, dispalyEmiInfo] = useState("none");
  const [cashOnInfo, dispalyCashOnDeliveryInfo] = useState("none");

  function displayPaymentProcedure(displayMethod) {
    dispalyDebitCardInfo("none");
    dispalyNetBanking("none");
    dispalyUpiInfo("none");
    dispalyEmiInfo("none");
    dispalyCashOnDeliveryInfo("none");

    if (displayMethod === "debit") dispalyDebitCardInfo("block");
    else if (displayMethod === "nb") dispalyNetBanking("block");
    else if (displayMethod === "upi") dispalyUpiInfo("block");
    else if (displayMethod === "emi") dispalyEmiInfo("block");
    else dispalyCashOnDeliveryInfo("block");
  }

  return (
    <div className="proceedToPayPage">
      <NavBar />
      <NavBar2 />

      <div className="proceedToPayContainer">
        <div className="proceedToPayContainerChild">
          <div className="addressContainer">
            <div>
              <h3>Deliver to Address</h3>
            </div>
            <div>
              <h6>
                House no. 407, Yashoda Niwas, At. Kurtanwadi, Tal. Chandgad,
                Dist. Kolhapur 416552
              </h6>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-warning btn-sm"
                style={{ marginLeft: "10px" }}
              >
                Change Address
              </button>
            </div>
          </div>
          <br />
          <div className="paymentContainer" style={{ width: "22rem" }}>
            <h5>Order Summary</h5>
            <div>
              <h6>Items</h6>
              <h6>Rs.{price}</h6>
            </div>

            <div>
              <h6>Delivery</h6>
              <h6>Rs. {deliveryCharge}</h6>
            </div>
            <hr />
            <div style={{ color: "red", fontWeight: "900" }}>
              <h6>Total Order</h6>
              <h6>Rs. {total}</h6>
            </div>
          </div>
          <hr />
          <div className="infoContainer">
            <h4>Select Payment method</h4>
            <div className="infoContainerChild">
              <form>
                <RadioGroup.Root
                  className="RadioGroupRoot"
                  defaultValue="Credit or debit card"
                  aria-label="View density"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RadioGroup.Item
                      className="RadioGroupItem"
                      value="Credit or debit card"
                      id="r1"
                      onClick={() => displayPaymentProcedure("debit")}
                    >
                      <RadioGroup.Indicator className="RadioGroupIndicator" />
                    </RadioGroup.Item>
                    <label className="Label" htmlFor="r1">
                      Credit or debit card
                    </label>
                  </div>
                  <div
                    className="debitCartPayment"
                    style={{
                      display: debitCardInfo,
                      border: "1px solid #aad1bf",
                      backgroundColor: "#cff3e45c",
                      borderRadius: "4px",
                    }}
                  >
                    <h6>We accept almost all credit and debit cards</h6>

                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button className="Button violet">
                          Add Card Details
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className="DialogContent">
                          <Dialog.Title className="DialogTitle">
                            Add Card Details
                          </Dialog.Title>
                          <Dialog.Description className="DialogDescription">
                            Make changes to your profile here. Click save when
                            you're done.
                          </Dialog.Description>
                          <fieldset className="Fieldset">
                            <label
                              className="LabelOfDialog"
                              htmlFor="Card Number"
                            >
                              Card Number
                            </label>
                            <input className="Input" id="name" />
                          </fieldset>
                          <fieldset className="Fieldset">
                            <label
                              className="LabelOfDialog"
                              htmlFor="Expiry Date"
                            >
                              Expiry Date
                            </label>
                            <input
                              className="Input"
                              id="username"
                              placeholder="MM/YY"
                            />
                          </fieldset>
                          <div
                            style={{
                              display: "flex",
                              marginTop: 25,
                              justifyContent: "flex-end",
                            }}
                          >
                            <Dialog.Close asChild>
                              <button className="Button green">
                                Save changes
                              </button>
                            </Dialog.Close>
                          </div>
                          <Dialog.Close asChild>
                            <button className="IconButton" aria-label="Close">
                              <Cross2Icon />
                            </button>
                          </Dialog.Close>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <RadioGroup.Item
                      className="RadioGroupItem"
                      value="Net Banking"
                      id="r2"
                      onClick={() => displayPaymentProcedure("nb")}
                    >
                      <RadioGroup.Indicator className="RadioGroupIndicator" />
                    </RadioGroup.Item>
                    <label className="Label" htmlFor="r2">
                      Net Banking
                    </label>
                  </div>
                  <div
                    className="netBankingInfo"
                    style={{
                      display: netBankingInfo,
                      border: "1px solid #aad1bf",
                      backgroundColor: "#cff3e45c",
                      borderRadius: "4px",
                    }}
                  >
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select your Bank
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            State Bank of India
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            HDFC Bank
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            ICICI Bank
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Axis Bank
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Kotak Mahindra Bank
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            IndusInd Bank
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Bank of Baroda
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RadioGroup.Item
                      className="RadioGroupItem"
                      value="Other UPI Apps"
                      id="r3"
                      onClick={() => displayPaymentProcedure("upi")}
                    >
                      <RadioGroup.Indicator className="RadioGroupIndicator" />
                    </RadioGroup.Item>
                    <label className="Label" htmlFor="r3">
                      Other UPI Apps
                    </label>
                  </div>
                  <div
                    className="upiInfo"
                    style={{
                      display: upiInfo,
                      border: "1px solid #aad1bf",
                      backgroundColor: "#cff3e45c",
                      borderRadius: "4px",
                    }}
                  >
                    <h6>Enter UPI ID</h6>
                    <input className="upiInput" type="text" required />
                    <button
                      type="button"
                      class="btn btn-warning btn-sm"
                      style={{ marginLeft: "10px" }}
                    >
                      Verify
                    </button>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "13px",
                        color: "blueviolet",
                      }}
                    >
                      The UPI ID is in the format of name/phone number@bankname
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RadioGroup.Item
                      className="RadioGroupItem"
                      value="EMI"
                      id="r4"
                      onClick={() => displayPaymentProcedure("emi")}
                    >
                      <RadioGroup.Indicator className="RadioGroupIndicator" />
                    </RadioGroup.Item>
                    <label className="Label" htmlFor="r4">
                      EMI
                    </label>
                  </div>
                  <div
                    className="emiInfo"
                    style={{
                      display: emiInfo,
                      border: "1px solid #aad1bf",
                      backgroundColor: "#cff3e45c",
                      borderRadius: "4px",
                    }}
                  >
                    <h6>We accept almost all credit and debit cards</h6>

                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button className="Button violet">
                          Add Card Details
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className="DialogContent">
                          <Dialog.Title className="DialogTitle">
                            Add Card Details
                          </Dialog.Title>
                          <Dialog.Description className="DialogDescription">
                            Make changes to your profile here. Click save when
                            you're done.
                          </Dialog.Description>
                          <fieldset className="Fieldset">
                            <label
                              className="LabelOfDialog"
                              htmlFor="Card Number"
                            >
                              Card Number
                            </label>
                            <input className="Input" id="name" />
                          </fieldset>
                          <fieldset className="Fieldset">
                            <label
                              className="LabelOfDialog"
                              htmlFor="Expiry Date"
                            >
                              Expiry Date
                            </label>
                            <input
                              className="Input"
                              id="username"
                              placeholder="MM/YY"
                            />
                          </fieldset>
                          <div
                            style={{
                              display: "flex",
                              marginTop: 25,
                              justifyContent: "flex-end",
                            }}
                          >
                            <Dialog.Close asChild>
                              <button className="Button green">
                                Save changes
                              </button>
                            </Dialog.Close>
                          </div>
                          <Dialog.Close asChild>
                            <button className="IconButton" aria-label="Close">
                              <Cross2Icon />
                            </button>
                          </Dialog.Close>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RadioGroup.Item
                      className="RadioGroupItem"
                      value="Cash on Delivery/Pay on Delivery"
                      id="r5"
                      onClick={() => displayPaymentProcedure("cash")}
                    >
                      <RadioGroup.Indicator className="RadioGroupIndicator" />
                    </RadioGroup.Item>
                    <label className="Label" htmlFor="r5">
                      Cash on Delivery/Pay on Delivery
                    </label>
                  </div>
                  <div
                    className="cashInfo"
                    style={{
                      display: cashOnInfo,
                      border: "1px solid #aad1bf",
                      backgroundColor: "#cff3e45c",
                      borderRadius: "4px",
                    }}
                  >
                    <h6>Cash, UPI and Cards accepted.</h6>
                    <button
                      type="button"
                      class="btn btn-warning btn-sm"
                      style={{ marginLeft: "10px" }}
                    >
                      Proceed By this way
                    </button>
                  </div>
                </RadioGroup.Root>
              </form>
            </div>
          </div>
          {/* <div className="lastPara">
            <h6 style={{fontWeight:"500", fontSize:'12px'}}>
              When your order is placed, we'll send you an e-mail message
              acknowledging receipt of your order. If you choose to pay using an
              electronic payment method (credit card, debit card or net
              banking), you will be directed to your bank's website to complete
              your payment. Your contract to purchase an item will not be
              complete until we receive your electronic payment and dispatch
              your item. If you choose to pay using Pay on Delivery (POD), you
              can pay using cash/card/net banking when you receive your item.
            </h6>
          </div> */}
        </div>
        <hr />
        <div className="lastPara">
            <h6 style={{fontWeight:"500", fontSize:'13px'}}>
              When your order is placed, we'll send you an e-mail message
              acknowledging receipt of your order. If you choose to pay using an
              electronic payment method (credit card, debit card or net
              banking), you will be directed to your bank's website to complete
              your payment. Your contract to purchase an item will not be
              complete until we receive your electronic payment and dispatch
              your item. If you choose to pay using Pay on Delivery (POD), you
              can pay using cash/card/net banking when you receive your item.
            </h6>
          </div>
      </div>
      <div className="thirdDiv" style={{ zIndex: "2000" }}>
        <Footer />
      </div>
      <div className="lastDiv" style={{ zIndex: "2000" }}>
        <h4>COPYRIGHT SITE.COM ALL RIGHTS RESERVED</h4>
      </div>
    </div>
  );
};

export default Proceedtopay;
