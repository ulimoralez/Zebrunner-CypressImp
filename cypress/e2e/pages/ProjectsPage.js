class ProjectsPage{

    elements = {
        alphaTeam : () => cy.get("div.projects-table__row > a").contains("AlphaTeam"),
    }

    goToAlpha(){
        this.elements.alphaTeam.click({force : true});

    }

}

module.exports = new ProjectsPage();