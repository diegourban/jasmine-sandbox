describe("Consulta", function() {

	it("should not charge if is return", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
		var consulta = new Consulta(guilherme, [], true , true);
		expect(consulta.preco()).toEqual(0);
	});

	it("should charge 25 for every common procedure", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
		var consulta = new Consulta(guilherme, ["proc1", "proc2"], false , false);
		expect(consulta.preco()).toEqual(50);
	});

	it("should charge specific price depending of the procedure", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
		var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false , false);
		expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
	});

	 it("should double the price on a private appointment", function() {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
        var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);

        expect(consulta.preco()).toEqual(50 * 2);
    });
});