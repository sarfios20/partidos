from itertools import combinations
from operator import itemgetter
from math import factorial
import collections

class Nodo:
    def __init__(self, partido, hijos=None):
        self.partido = partido
        if hijos == None:
            self.hijos =  []
        else:
            self.hijos = hijos

    def explorar(self, operation):
        #listaSubida = []
        #listaSubida.append(self)

        for n in self.hijos:
            n.explorar(operation)
        operation(self.partido)

    def Arbol(self, listaBajada, listaSubida):
        listaBajada.remove(self.partido)
        listaSubida.append(self.partido)
        listaOpciones = []

        for p in listaBajada:
            n = Nodo(p)
            listaOpciones.append(n.Arbol(listaBajada.copy(), listaSubida.copy()))
            self.hijos.append(n)

        listaOpciones.append([])
        listaOpciones.append(listaSubida)
        print(listaOpciones)
        return self.partido.preguntar(listaOpciones)



    def crearArbol(self, listaBajada):
        listaBajada.remove(self.partido)
        for p in listaBajada:
            n = Nodo(p)
            n.crearArbol(listaBajada.copy())
            self.hijos.append(n)

class Partido:
    def __init__(self, name, seats):
        self.name = name
        self.seats = seats
        self.P = []
    def check(self, listaCoalicion):
        seats = 0
        for p in listaCoalicion:
            seats = seats + p.seats
        if seats >= mayoria:
            return True
        return False

    def visitar(self):
        print(self.name)
    def preguntar(self, listaOpciones):
        for l in self.P:
            for lista in listaOpciones:
                if self.check(lista):
                    if l == lista:
                        return l
        return listaOpciones[0]
"""
    def __eq__(self, other):
        if self.seats == other.seats:
            return True
        return False

    def __ne__(self, other):
        return self.__cmp__(other) != 0

    def __gt__(self, other):
        return self.__cmp__(other) > 0

    def __lt__(self, other):
        if self.seats < other.seats:
            return True
        return False

    def __ge__(self, other):
        return self.__cmp__(other) >= 0

    def __le__(self, other):
        return self.__cmp__(other) <= 0
"""
def shapley(weight, quota):
    """
    Calculator for the shapley-shubik index of each player.
    Parameters
    ----------
    weight  : list
                Vector with the weights of each player.
    quota   : int
                Necesary weight to win the game.
    Returns
    -------
    list
        Vector of the shapley-shubik power for each player,
        where shapley_index[i] is the shapley-shubik power for the player i.
    """
    number_of_players = len(weight)
    players = name_players(weight)
    coalitions = winning_coalitions(players, quota)

    SSI = []
    for player in players:
        player_ssi = 0.0
        for coalition in coalitions:
            if is_critical(player, players, coalition, quota):
                player_ssi += float((factorial(number_of_players - len(coalition)) * factorial(len(coalition) - 1))) / factorial(number_of_players)
        SSI.append(player_ssi)
    total_ssi = sum(SSI)

    shapley_index = map(lambda x: round((x / total_ssi), 3), SSI)

    return shapley_index


def _winning_coalitions(players, quota):
    """
    List the winning coalitions of a given game.
    Parameters
    ----------
    players : dictionary
                Name of the the players and their weights.
    quota   : int
                Necesary weight to win the game.
    Yields
    -------
    list
        A winning coalition.
    """
    if quota <= 0:
        for coalition_size in range(len(players)+1):
            for coalition in combinations(players, coalition_size):
                yield coalition
    elif not players:
        pass
    else:
        player_name, player_votes = players[-1]
        players = players[:-1]
        for coalition in _winning_coalitions(players, quota-player_votes):
            yield ((player_name, player_votes),) + coalition
            if sum([votes for (name, votes) in coalition]) >= quota:
                yield coalition


def winning_coalitions(players, quota):
    """
    List the winning coalitions of a given game.
    Parameters
    ----------
    players : dictionary
                Name of the the players and their weights.
    quota   : int
                Necesary weight to win the game.
    Returns
    -------
    list
        Vector of the winning coalitions, each winning coalition list
        the name of the players for what it conforms.
    """
    players = sorted(players.items(), key=itemgetter(1))
    coalitions = _winning_coalitions(players, quota)
    return sorted([sorted([name for (name, votes) in c]) for c in coalitions])


def number_players_search(weights, players, quota):
    """
    Count the quantity of players before they pass the quota.
    Parameters
    ----------
    weight  : list
                Vector with the weights of each player.
    players : dictionary
                Name of the the players and their weights.
    quota   : int
                Necesary weight to win the game.
    Returns
    -------
    int
        Quantity of players.
    """
    total_power = 0
    number_players = 0
    for player in weights:
        total_power += players[player]
        number_players += 1
        if total_power >= quota:
            return number_players


def winning_minimal_coalitions(players, quota):
    """
    List the minimal coalitions that win the game.
    Parameters
    players : dictionary
                Name of the the players and their weights.
    quota   : int
                Necesary weight to win the game.
    Yields
    -------
    list
        A minimal coalition.
    """
    min_to_max_weight = [i[0] for i in sorted(players.items(),
                                              key=itemgetter(1))]

    max_to_min_weight = [i[0] for i in  sorted(players.items(),
                                               key=itemgetter(1),
                                               reverse=True)]

    min_players = number_players_search(max_to_min_weight, players, quota)
    max_players = number_players_search(min_to_max_weight, players, quota)

    for i in range(min_players, max_players + 1):
        potencial_coalitions = combinations(players, i)
        for coalition in potencial_coalitions:
            total_power = 0
            for player in coalition:
                total_power += players[player]
            if total_power == quota:
                yield coalition
            elif total_power > quota:
                flag = 1
                for player in coalition:
                    if not(total_power-players[player] < quota):
                        flag = 0
                        break
                if flag:
                    yield coalition


def name_players(weight):
    """
    Name the players of the game.
    Parameters
    ----------
    weight  : list
                Vector with the weights of each player.
    Returns
    -------
    dictionary
        A name of each player with his power in a dictionary. The
        weight if the player[i] = weight[i].
    """
    players = {}
    counter = 0
    for letter in range(ord('a'), ord('z')+1):
        player_name = chr(letter)
        players[player_name] = weight[counter]
        counter += 1
        if counter == len(weight):
            return collections.OrderedDict(sorted(players.items()))


def is_critical(player, players, coalition, quota):
    """
    Criticality analyzer for a player
    Parameters
    ----------
    player    : string
                    Name of the player that is gonna be analyzed.
    players   : dictionary
                    Name of the the players and their weights.
    coalition : dictionary
                    Vector with the name of the players and their weights,
                    for the winning coalition to analyze.
    quota     : int
                    Necesary weight to win the game.
    Returns
    -------
    bool
        If the total power of the coalition, less the power of the player,
        is less than the quota returns true, otherwise returns false.
    """
    total_power = 0
    for cplayer in coalition:
        if cplayer != player:
            total_power += players[cplayer]
    if total_power < quota:
        return True
    return False



a = Partido("a", 170)
b = Partido("b", 6)
c = Partido("c", 1)

mayoria = 176

a.P.append(b)
a.P.append("")
a.P.append(c)

a.P = [[a, b], [a], [], [b, a], [c, a], [b, c], [c, b], [b], [c]]
#b.P = [[a, b], [b], [b, a], [], [c, b], [a, c], [c, a], [c], [a]]
b.P = [[b], [b, a], [], [a, b], [c, b], [a, c], [c, a], [a], [c]]
c.P = [[c], [c, b], [c, a], [c, b], [], [b, a], [b, c], [b], [a]]

l = Nodo(a)

#l.crearArbol([a, b, c])
#l.explorar(Partido.visitar)

#map = shapley([a.seats, b.seats, c.seats], 176)
#print(list(map))
#print(r.hijos)
#print(l.hijos)

lista = l.Arbol([a, b, c], [])
print("------")
for p in lista:
    print(p.name, end="")