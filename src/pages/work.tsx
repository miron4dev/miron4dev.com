import React from "react";
import Job from "../components/Job";
import Navbar from "../components/Navbar";
import Typist from "../components/Typist";
import MainLayout from "../layouts";

class WorkPage extends React.Component {
  render() {
    return (
      <MainLayout title="Evgeny Mironenko | Working Experience"
                  metaDescription="Working Experience of Senior Software Engineer Evgeny Mironenko"
                  contextPath="/work">
        <div className="d-flex flex-column main-layout">
          <Navbar/>
          <div className="container-fluid container">
            <main>
              <section className="py-3 py-md-4">
                <div className="d-flex align-items-end typist">
                  <h1><Typist messages={["My experience"]}/></h1>
                </div>
              </section>

              <div className="container py-2">
                <Job company="GrabCAD" position="Senior Software Engineer" date="March 2019 - Ongoing">
                  <p className="card-text">
                    designing, developing and supporting innovative solutions for 3D printers and also for one of
                    the largest online community of professional engineers, designers and manufacturers.
                  </p>
                </Job>

                <Job company="Omniva" position="FullStack Engineer" date="May 2018 - February 2019"
                     passed={true}>
                  <ul className="card-text text-muted company-achievement-list">
                    <li>
                      developing business logic for the largest sorting line in the Baltic countries
                    </li>
                    <li>
                      active participating in launch of a few new projects
                    </li>
                    <li>
                      support and troubleshooting of Estonian sorting center
                    </li>
                  </ul>
                </Job>

                <Job company="T-Systems RUS" position="Senior Software Engineer" date="Feb 2017 - April 2018"
                     passed={true}>
                  <ul className="card-text text-muted company-achievement-list">
                    <li>
                      technical project leading an internal project for the largest telecommunications provider in
                      Europe
                    </li>
                    <li>
                      supervise the whole development cycle, from concept to delivery, including architecture, testing
                      and so on
                    </li>
                    <li>
                      prototyping, development and integration in close cooperation with Product Owner
                    </li>
                    <li>
                      mentoring less experienced team members
                    </li>
                  </ul>
                </Job>

                <Job company="T-Systems RUS" position="Software Engineer" date="Jun 2014 - Feb 2017"
                     passed={true}/>
                <Job company="T-Systems RUS" position="Junior Software Engineer" date="Jun 2013 - Jun 2014"
                     passed={true}/>
              </div>
            </main>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default WorkPage;
